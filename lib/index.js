'use strict'
/**
 * @kongjianguan/dsh-opencode-usage — host half.
 * Registers webServer API routes used by the browser bundle:
 *   GET  /ocu/api/config  -> current config
 *   POST /ocu/api/config  -> update config (persisted to ~/.dsh/ocu-config.json)
 *   POST /ocu/api/usage   -> fetch opencode.ai usage (curl + parse), optional force
 */
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('node:fs')
const { join } = require('node:path')
const { homedir } = require('node:os')

const CONFIG_PATH = join(homedir(), '.dsh', 'ocu-config.json')

const DEFAULT_CONFIG = {
  provider: 'opencode',
  enabled: true,
  // Per-user values are stored at ~/.dsh/ocu-config.json (written by the
  // settings page) — never commit credentials to this file.
  workspaceId: '',
  cookie: '',
  intervalSec: 60,
  showProviders: '',
  showCircle: true,
  showRolling: true,
  showWeekly: true,
  showMonthly: true,
}

function readConfig() {
  try {
    if (existsSync(CONFIG_PATH)) {
      const raw = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'))
      if (raw && typeof raw === 'object') return Object.assign({}, DEFAULT_CONFIG, raw)
    }
  } catch (e) { /* corrupted file -> defaults */ }
  return Object.assign({}, DEFAULT_CONFIG)
}

function writeConfig(cfg) {
  try {
    mkdirSync(join(homedir(), '.dsh'), { recursive: true })
    writeFileSync(CONFIG_PATH, JSON.stringify(cfg, null, 2), { mode: 0o600 })
  } catch (e) { /* best effort */ }
}

const state = {
  config: readConfig(),
  cache: null,
}

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  })
  res.end(body)
}

function readBody(req) {
  return new Promise((resolve) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
      if (data.length > 1e6) req.destroy()
    })
    req.on('end', () => {
      if (!data) return resolve({})
      try { resolve(JSON.parse(data)) } catch (e) { resolve({}) }
    })
    req.on('error', () => resolve({}))
  })
}

async function resolveCurl(subprocess) {
  if (subprocess === undefined) return null
  try {
    return await subprocess.resolveExecutable('curl')
  } catch (e) { /* fall through */ }
  for (const p of ['/usr/bin/curl', '/opt/homebrew/bin/curl', '/usr/local/bin/curl']) {
    try {
      return await subprocess.resolveExecutable(p)
    } catch (e) { /* try next */ }
  }
  return null
}

async function fetchHtml(subprocess, url) {
  if (subprocess === undefined) throw new Error('subprocess 服务不可用，无法发起网络请求')
  const curlPath = await resolveCurl(subprocess)
  if (!curlPath) throw new Error('未找到 curl 可执行文件')
  const handle = subprocess.spawn({
    argv: [curlPath, '-sS', '--max-time', '20', '--connect-timeout', '10', '-A', 'Mozilla/5.0', '-b', state.config.cookie, url],
    cwd: '/',
    stdio: {
      stdin: 'ignore',
      stdout: { collect: true, maxBytes: 262144 },
      stderr: { collect: true, maxBytes: 65536 },
    },
    graceMs: 3000,
  })
  const outcome = await handle.done
  const stdout = handle.collected.stdout ? handle.collected.stdout.readFrom(0).text : ''
  if (outcome.exitCode !== 0) {
    const stderr = handle.collected.stderr ? handle.collected.stderr.readFrom(0).text : ''
    throw new Error('请求失败 (exit ' + outcome.exitCode + ') ' + String(stderr || '').slice(0, 160))
  }
  if (!stdout) throw new Error('请求返回空内容')
  return stdout
}

function parseUsage(html) {
  const re = /rollingUsage:\$R\[\d+\]=\{([^}]*)\},weeklyUsage:\$R\[\d+\]=\{([^}]*)\},monthlyUsage:\$R\[\d+\]=\{([^}]*)\}/
  const m = html.match(re)
  if (!m) throw new Error('页面中没有找到用量数据：cookie 可能已过期，或 workspaceId 不正确')
  const parseObj = function (s) {
    return JSON.parse(('{' + s + '}').replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":'))
  }
  return { rolling: parseObj(m[1]), weekly: parseObj(m[2]), monthly: parseObj(m[3]) }
}

async function fetchUsage(subprocess, force) {
  const now = Date.now()
  if (!force && state.cache && now - state.cache.at < 4000) return state.cache.data
  const url = 'https://opencode.ai/workspace/' + encodeURIComponent(state.config.workspaceId) + '/go'
  const html = await fetchHtml(subprocess, url)
  const usage = parseUsage(html)
  const result = {
    provider: state.config.provider,
    fetchedAt: now,
    windows: {
      rolling: usage.rolling,
      weekly: usage.weekly,
      monthly: usage.monthly,
    },
  }
  state.cache = { at: now, data: result }
  return result
}

function apply(ctx) {
  // inject: ['webServer', 'subprocess'] guarantees these are ready; direct
  // ctx.get() misses services provided by sibling bundle entries.
  const webServer = ctx.webServer
  const subprocess = ctx.subprocess

  const disposers = [
    webServer.register({
      kind: 'exact',
      path: '/ocu/api/config',
      handler: async (req, res) => {
        if (req.method === 'POST') {
          const body = await readBody(req)
          const c = (body && body.config) || {}
          const workspaceId = String(c.workspaceId || '').trim()
          const cookie = String(c.cookie || '').trim()
          if (!workspaceId) return sendJson(res, 400, { ok: false, error: 'workspaceId 不能为空' })
          if (!cookie) return sendJson(res, 400, { ok: false, error: 'auth cookie 不能为空' })
          state.config = {
            provider: c.provider === 'opencode' ? 'opencode' : state.config.provider,
            enabled: c.enabled !== false,
            workspaceId,
            cookie,
            intervalSec: Math.max(10, Math.min(3600, Number(c.intervalSec) || 60)),
            showProviders: String(c.showProviders || '').trim(),
            showCircle: c.showCircle !== false,
            showRolling: c.showRolling !== false,
            showWeekly: c.showWeekly !== false,
            showMonthly: c.showMonthly !== false,
          }
          state.cache = null
          writeConfig(state.config)
          return sendJson(res, 200, { ok: true, config: state.config })
        }
        return sendJson(res, 200, { ok: true, config: state.config })
      },
    }),
    webServer.register({
      kind: 'exact',
      path: '/ocu/api/usage',
      handler: async (req, res) => {
        const body = await readBody(req)
        const force = !!(body && body.force)
        try {
          const result = await fetchUsage(subprocess, force)
          return sendJson(res, 200, { ok: true, data: result, config: state.config })
        } catch (e) {
          return sendJson(res, 200, {
            ok: false,
            error: (e && e.message) || String(e),
            config: state.config,
          })
        }
      },
    }),
  ]

  ctx.effect(() => () => {
    for (const d of disposers) d()
  })
}

module.exports = { name: 'dsh-opencode-usage', inject: ['webServer', 'subprocess'], apply }

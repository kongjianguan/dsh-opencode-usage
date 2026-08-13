window.__ModuleLoader__.load({
  id: '@local/dsh-opencode-usage',
  factory: function (require) {
    var module = { exports: {} }
    var React = require('react')

    var CSS = [
      '.ocu-chip-root{position:relative;display:inline-flex;align-items:center;outline:none;border-radius:8px}',
      '.ocu-chip-root:focus-visible{box-shadow:0 0 0 1px var(--dsw-alias-brand-primary)}',
      '.ocu-chip{display:inline-flex;align-items:center;gap:6px;padding:2px 8px;border-radius:8px;border:1px solid color-mix(in srgb,var(--dsw-alias-border-l1) 70%,transparent);background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 55%,transparent);backdrop-filter:blur(14px) saturate(1.5);-webkit-backdrop-filter:blur(14px) saturate(1.5);cursor:pointer;font-size:11px;line-height:1.3;color:var(--dsw-alias-label-secondary);user-select:none;white-space:nowrap;transition:border-color .15s ease,opacity .15s ease,background .15s ease}',
      '.ocu-chip:hover{border-color:color-mix(in srgb,var(--dsw-alias-border-l2) 75%,transparent);background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 72%,transparent)}',
      '.ocu-chip.ocu-busy{opacity:.7}',
      '.ocu-seg{display:inline-flex;align-items:center;gap:4px}',
      '.ocu-seg-label{opacity:.8;flex:none;width:26px;text-align:right}',
      '.ocu-seg-track{width:48px;height:4px;border-radius:2px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-2) 80%,transparent);overflow:hidden}',
      '.ocu-seg-fill{height:100%;border-radius:2px;min-width:3px;transition:width .35s ease}',
      '.ocu-seg-pct{min-width:30px;text-align:right;font-variant-numeric:tabular-nums}',
      '.ocu-btn-mini{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border:none;border-radius:4px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font-size:12px;line-height:1;padding:0}',
      '.ocu-btn-mini:hover{background:color-mix(in srgb,var(--dsw-alias-bg-layer-2) 80%,transparent);color:var(--dsw-alias-label-primary)}',
      '@keyframes ocu-pop{from{opacity:0;transform:translateY(-4px) scale(.97)}to{opacity:1;transform:none}}',
      '.ocu-panel{position:absolute;top:calc(100% + 6px);right:0;z-index:9999;min-width:290px;background:var(--dsw-alias-bg-overlay);border:1px solid color-mix(in srgb,var(--dsw-alias-border-l2) 55%,transparent);border-radius:12px;box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 12px 32px rgba(0,0,0,.35);padding:10px 12px;font-size:12px;color:var(--dsw-alias-label-primary);animation:ocu-pop .14s ease-out}',
      '@supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))){.ocu-panel{background:color-mix(in srgb,var(--dsw-alias-bg-overlay) 46%,transparent);backdrop-filter:blur(26px) saturate(1.9);-webkit-backdrop-filter:blur(26px) saturate(1.9)}}',
      '.ocu-panel-title{font-size:12px;font-weight:600;margin:0 0 8px}',
      '.ocu-bar{display:flex;align-items:center;gap:5px;font-size:11px;line-height:16px;white-space:nowrap;min-width:0}',
      '.ocu-bar-swatch{flex:none;width:8px;height:8px;border-radius:2px}',
      '.ocu-bar-label{flex:none;width:44px;overflow:hidden;color:var(--dsw-alias-label-secondary)}',
      '.ocu-bar-track{flex:1 1 auto;min-width:48px;height:5px;border-radius:999px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-2) 80%,transparent);overflow:hidden}',
      '.ocu-bar-fill{display:block;height:100%;border-radius:999px;min-width:4px;transition:width .35s ease}',
      '.ocu-bar-val{flex:none;min-width:96px;text-align:left;white-space:nowrap}',
      '.ocu-bar-pct{font-variant-numeric:tabular-nums;font-weight:500}',
      '.ocu-bar-reset{font-size:10px;color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums}',
      '.ocu-panel-foot{margin-top:8px;padding-top:6px;border-top:1px solid color-mix(in srgb,var(--dsw-alias-border-l1) 70%,transparent);font-size:11px;color:var(--dsw-alias-label-secondary);display:flex;justify-content:space-between;align-items:center;gap:8px}',
      '.ocu-set{display:flex;flex-direction:column;gap:10px;padding:4px 2px}',
      '.ocu-set-title{margin:0;font-size:15px;color:var(--dsw-alias-label-primary)}',
      '.ocu-set-desc{margin:0;font-size:12px;color:var(--dsw-alias-label-secondary);line-height:1.5}',
      '.ocu-field{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--dsw-alias-label-secondary)}',
      '.ocu-input{background:color-mix(in srgb,var(--dsw-alias-bg-layer-2) 85%,transparent);border:1px solid var(--dsw-alias-border-l1);border-radius:6px;padding:6px 8px;color:var(--dsw-alias-label-primary);font-size:12px;font-family:inherit}',
      '.ocu-input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}',
      '.ocu-ta{resize:vertical;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}',
      '.ocu-checkrow{display:flex;gap:14px;flex-wrap:wrap}',
      '.ocu-check{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--dsw-alias-label-primary);cursor:pointer}',
      '.ocu-btns{display:flex;gap:8px}',
      '.ocu-btn{padding:6px 12px;border-radius:6px;border:1px solid var(--dsw-alias-border-l2);background:color-mix(in srgb,var(--dsw-alias-bg-layer-2) 85%,transparent);color:var(--dsw-alias-label-primary);cursor:pointer;font-size:12px;font-family:inherit}',
      '.ocu-btn:hover{border-color:var(--dsw-alias-brand-primary)}',
      '.ocu-btn:disabled{opacity:.5;cursor:default}',
      '.ocu-msg{font-size:12px;padding:6px 10px;border-radius:6px;word-break:break-all}',
      '.ocu-ok{color:var(--dsw-alias-state-success-primary)}',
      '.ocu-err{color:var(--dsw-alias-state-error-primary)}',
      '.ocu-circle-root{display:inline-flex;position:relative}',
      '.ocu-circle-trigger{width:28px;height:28px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:999px;flex:none;place-items:center;display:grid;padding:0}',
      '.ocu-circle-trigger:hover{background:var(--dsw-alias-interactive-bg-hover)}',
      '.ocu-circle-trigger.ocu-busy{opacity:.7}',
      '.ocu-circle-panel{z-index:100;box-sizing:border-box;border:1px solid var(--dsw-alias-border-inverted);background:var(--dsw-specific-menu);width:264px;box-shadow:var(--dsw-shadow-lv3);color:var(--dsw-alias-label-secondary);cursor:default;border-radius:12px;padding:12px;font-size:12px;line-height:20px;position:absolute;bottom:calc(100% + 8px);right:0;animation:ocu-pop .12s ease-out}',
      '.ocu-circle-header{align-items:center;gap:6px;display:flex}',
      '.ocu-circle-percent{color:var(--dsw-alias-label-primary);font-weight:500}',
      '.ocu-circle-headline{color:var(--dsw-alias-label-tertiary)}',
      '.ocu-circle-rows{margin:8px 0 0;display:flex;flex-direction:column;gap:3px}',
    ].join('\n')

    function apiConfig() {
      return fetch('/ocu/api/config', { method: 'GET' }).then(function (r) { return r.json() })
    }

    function apiSetConfig(config) {
      return fetch('/ocu/api/config', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ config: config }),
      }).then(function (r) { return r.json() })
    }

    function apiUsage(force) {
      return fetch('/ocu/api/usage', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(force ? { force: true } : {}),
      }).then(function (r) { return r.json() }).catch(function (e) {
        return { ok: false, error: (e && e.message) || String(e) }
      })
    }

    function fmtReset(sec) {
      sec = Math.max(0, Math.round(Number(sec) || 0))
      if (sec >= 86400) {
        var d = Math.floor(sec / 86400)
        return d + '天 ' + Math.floor((sec % 86400) / 3600) + '小时'
      }
      if (sec >= 3600) return Math.floor(sec / 3600) + '小时 ' + Math.floor((sec % 3600) / 60) + '分'
      if (sec >= 60) return Math.floor(sec / 60) + '分 ' + (sec % 60) + '秒'
      return sec + '秒'
    }

    function fmtTime(ts) {
      var d = new Date(ts)
      var p = function (n) { return n < 10 ? '0' + n : String(n) }
      return p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds())
    }

    function fmtResetShort(sec) {
      sec = Math.max(0, Math.round(Number(sec) || 0))
      if (sec >= 86400) return Math.floor(sec / 86400) + '天后重置'
      if (sec >= 3600) return Math.floor(sec / 3600) + '小时后重置'
      if (sec >= 60) return Math.floor(sec / 60) + '分钟后重置'
      return sec + '秒后重置'
    }

    function pctColor(pct) {
      if (pct >= 85) return 'var(--dsw-alias-state-error-primary)'
      if (pct >= 60) return 'var(--dsw-alias-state-warn-primary)'
      return 'var(--dsw-alias-state-success-primary)'
    }

    function rawPct(v) {
      return Math.round(Number(v) || 0)
    }

    function clampPct(v) {
      return Math.max(0, Math.min(100, rawPct(v)))
    }

    var WINDOWS = [
      { key: 'rolling', label: '5小时', short: '5h' },
      { key: 'weekly', label: '本周', short: '7d' },
      { key: 'monthly', label: '本月', short: '30d' },
    ]

    // One row of label + absolute progress bar + percent, shared by the header
    // popup and the composer circle popup.
    function BarRow(props) {
      var pct = props.pct
      var color = pctColor(pct)
      return React.createElement('div', {
        className: 'ocu-bar',
        title: props.title || '',
      },
        React.createElement('span', { className: 'ocu-bar-swatch', style: { background: color }, 'aria-hidden': true }),
        React.createElement('span', { className: 'ocu-bar-label' }, props.label),
        React.createElement('span', { className: 'ocu-bar-track' },
          React.createElement('span', { className: 'ocu-bar-fill', style: { width: pct + '%', background: color } })
        ),
        React.createElement('span', { className: 'ocu-bar-val' },
          React.createElement('span', { className: 'ocu-bar-pct', style: { color: color } }, pct + '%'),
          props.reset ? React.createElement('span', { className: 'ocu-bar-reset' }, ' · ' + props.reset) : null
        )
      )
    }

    function UsageChip(props) {
      var sessionId = props.sessionId
      var mdirs = props.modelDirectories
      var states = React.useState(null)
      var snap = states[0]
      var setSnap = states[1]
      var expandedState = React.useState(false)
      var expanded = expandedState[0]
      var setExpanded = expandedState[1]
      var busyState = React.useState(false)
      var busy = busyState[0]
      var setBusy = busyState[1]
      var tickState = React.useState(0)
      var setTick = tickState[1]
      var providerState = React.useState(null)
      var provider = providerState[0]
      var setProvider = providerState[1]
      var hideTimerRef = React.useRef(null)

      // track the session's active model channel (provider id)
      React.useEffect(function () {
        if (!mdirs || !sessionId) return
        var alive = true
        var dir = null
        try { dir = mdirs.directoryFor(sessionId) } catch (e) { return }
        var read = function () {
          if (!alive) return
          var snap2 = dir.store.getSnapshot()
          setProvider((snap2.current && snap2.current.provider) || null)
        }
        read()
        var stop = dir.store.subscribe(read)
        dir.load().catch(function () {})
        return function () {
          alive = false
          if (stop) stop()
        }
      }, [sessionId])

      // config + polling loop
      React.useEffect(function () {
        var alive = true
        var timer = null
        var lastIntervalSec = 60
        var cfgEnabled = true

        var tick = function () {
          if (!alive) return
          if (cfgEnabled) {
            apiUsage(false).then(function (r) {
              if (!alive) return
              setSnap(r)
              if (r && r.config) {
                lastIntervalSec = r.config.intervalSec || lastIntervalSec
                cfgEnabled = r.config.enabled !== false
              }
            })
          } else {
            apiConfig().then(function (r) {
              if (!alive) return
              setSnap(r)
              if (r && r.config) cfgEnabled = r.config.enabled !== false
            })
          }
        }
        var loop = function () {
          var delay = (cfgEnabled ? lastIntervalSec : 15) * 1000
          timer = window.setTimeout(function () { tick(); loop() }, delay)
        }
        apiConfig().then(function (r) {
          if (!alive) return
          setSnap(r)
          if (r && r.config) cfgEnabled = r.config.enabled !== false
          tick()
          loop()
        })
        return function () {
          alive = false
          if (timer) window.clearTimeout(timer)
        }
      }, [])

      // live countdown while expanded
      React.useEffect(function () {
        if (!expanded) return
        var iv = window.setInterval(function () { setTick(function (t) { return t + 1 }) }, 1000)
        return function () { window.clearInterval(iv) }
      }, [expanded])

      var refresh = function (e) {
        if (e && e.stopPropagation) e.stopPropagation()
        if (busy) return
        setBusy(true)
        apiUsage(true).then(function (r) {
          setSnap(r)
          setBusy(false)
        })
      }

      var cfg = (snap && snap.config) || null
      var data = (snap && snap.ok && snap.data) ? snap.data : null
      var show = function (key) {
        if (key === 'rolling') return !cfg || cfg.showRolling !== false
        if (key === 'weekly') return !cfg || cfg.showWeekly !== false
        return !cfg || cfg.showMonthly !== false
      }

      if (cfg && cfg.enabled === false) return null

      var filterList = ((cfg && cfg.showProviders) || '').split(',').map(function (s) { return s.trim() }).filter(Boolean)
      if (filterList.length > 0 && (provider === null || filterList.indexOf(provider) === -1)) return null

      if (!snap || (snap.ok && !snap.data && !snap.error)) {
        return React.createElement('div', { className: 'ocu-chip-root', tabIndex: 0 },
          React.createElement('div', { className: 'ocu-chip ocu-busy', title: '正在获取用量…' }, '用量…')
        )
      }

      if (!data) {
        return React.createElement('div', { className: 'ocu-chip-root', tabIndex: 0 },
          React.createElement('div', {
            className: 'ocu-chip',
            title: (snap.error || '用量获取失败') + '（点击重试）',
            onClick: refresh,
          }, '⚡ 用量不可用')
        )
      }

      var tooltipLines = WINDOWS.filter(function (w) { return show(w.key) }).map(function (w) {
        var u = data.windows[w.key]
        return w.label + ': ' + u.usagePercent + '% · ' + fmtReset(u.resetInSec) + '后重置'
      })
      if (provider) tooltipLines.push('渠道: ' + provider)
      tooltipLines.push('更新时间 ' + fmtTime(data.fetchedAt))

      // 圆形按钮颜色取三个窗口里最高的用量（红>黄>绿）
      var maxPct = 0
      WINDOWS.forEach(function (w) {
        if (show(w.key)) maxPct = Math.max(maxPct, clampPct(data.windows[w.key].usagePercent))
      })
      var maxColor = pctColor(maxPct)

      var elapsed = Math.floor((Date.now() - data.fetchedAt) / 1000)
      var panelRows = WINDOWS.map(function (w) {
        var u = data.windows[w.key]
        var pct = clampPct(u.usagePercent)
        var remain = Math.max(0, u.resetInSec - elapsed)
        return React.createElement(BarRow, {
          key: w.key,
          label: w.label,
          pct: pct,
          reset: fmtResetShort(remain),
          title: w.label + ' · ' + fmtReset(remain) + '后重置',
        })
      })

      return React.createElement('div', {
        className: 'ocu-chip-root',
        tabIndex: 0,
        onMouseEnter: function () {
          window.clearTimeout(hideTimerRef.current)
          setExpanded(true)
        },
        onMouseLeave: function () {
          hideTimerRef.current = window.setTimeout(function () { setExpanded(false) }, 180)
        },
        onKeyDown: function (e) {
          if (e.key === 'Escape') setExpanded(false)
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setExpanded(!expanded)
          }
        },
      },
        React.createElement('button', {
          className: 'ocu-circle-trigger' + (busy ? ' ocu-busy' : ''),
          title: tooltipLines.join('\n'),
          style: {
            fontSize: 13,
            color: maxColor,
            background: 'color-mix(in srgb, ' + maxColor + ' 12%, transparent)',
          },
          onMouseDown: function (e) { e.preventDefault() },
          onClick: refresh,
        }, '⚡'),
        expanded ? React.createElement('div', {
          className: 'ocu-panel',
          onMouseEnter: function () { window.clearTimeout(hideTimerRef.current) },
          onMouseLeave: function () {
            hideTimerRef.current = window.setTimeout(function () { setExpanded(false) }, 180)
          },
        },
          React.createElement('p', { className: 'ocu-panel-title' }, 'OpenCode 用量'),
          panelRows,
          React.createElement('div', { className: 'ocu-panel-foot' },
            React.createElement('span', null, '渠道 ' + (provider || '未知') + ' · 更新于 ' + fmtTime(data.fetchedAt)),
            React.createElement('button', {
              className: 'ocu-btn-mini',
              title: '刷新',
              onMouseDown: function (e) { e.preventDefault() },
              onClick: refresh,
            }, '↻')
          )
        ) : null
      )
    }

    function SettingsPage() {
      var formState = React.useState(null)
      var form = formState[0]
      var setForm = formState[1]
      var msgState = React.useState(null)
      var msg = msgState[0]
      var setMsg = msgState[1]
      var busyState = React.useState(false)
      var busy = busyState[0]
      var setBusy = busyState[1]

      React.useEffect(function () {
        apiConfig().then(function (r) {
          var c = (r && r.config) || {}
          setForm({
            enabled: c.enabled !== false,
            workspaceId: c.workspaceId || '',
            cookie: c.cookie || '',
            intervalSec: c.intervalSec || 60,
            showProviders: c.showProviders || '',
            showCircle: c.showCircle !== false,
            showRolling: c.showRolling !== false,
            showWeekly: c.showWeekly !== false,
            showMonthly: c.showMonthly !== false,
          })
        })
      }, [])

      if (!form) return React.createElement('div', { className: 'ocu-set' }, '加载中…')

      var set = function (patch) { setForm(Object.assign({}, form, patch)) }

      var save = function () {
        setBusy(true)
        setMsg(null)
        apiSetConfig({
          provider: 'opencode',
          enabled: form.enabled !== false,
          workspaceId: form.workspaceId.trim(),
          cookie: form.cookie.trim(),
          intervalSec: Number(form.intervalSec) || 60,
          showProviders: form.showProviders || '',
          showCircle: form.showCircle !== false,
          showRolling: form.showRolling,
          showWeekly: form.showWeekly,
          showMonthly: form.showMonthly,
        }).then(function (res) {
          setBusy(false)
          setMsg(res && res.ok ? { ok: true, text: '配置已保存' } : { ok: false, text: (res && res.error) || '保存失败' })
        }).catch(function (e) {
          setBusy(false)
          setMsg({ ok: false, text: String((e && e.message) || e) })
        })
      }

      var test = function () {
        setBusy(true)
        setMsg(null)
        apiUsage(true).then(function (res) {
          setBusy(false)
          if (res && res.ok && res.data) {
            var w = res.data.windows
            setMsg({ ok: true, text: '连接成功 · 5小时 ' + w.rolling.usagePercent + '% · 本周 ' + w.weekly.usagePercent + '% · 本月 ' + w.monthly.usagePercent + '%' })
          } else {
            setMsg({ ok: false, text: (res && res.error) || '连接失败' })
          }
        }).catch(function (e) {
          setBusy(false)
          setMsg({ ok: false, text: String((e && e.message) || e) })
        })
      }

      var input = function (key, label, type, placeholder) {
        return React.createElement('label', { className: 'ocu-field', key: key },
          React.createElement('span', null, label),
          React.createElement('input', {
            className: 'ocu-input',
            type: type || 'text',
            value: form[key],
            placeholder: placeholder || '',
            onChange: function (e) { set({ [key]: e.target.value }) },
          })
        )
      }

      var checkbox = function (key, label) {
        return React.createElement('label', { className: 'ocu-check', key: key },
          React.createElement('input', {
            type: 'checkbox',
            checked: form[key],
            onChange: function (e) { set({ [key]: e.target.checked }) },
          }),
          React.createElement('span', null, label)
        )
      }

      return React.createElement('div', { className: 'ocu-set' },
        React.createElement('h3', { className: 'ocu-set-title' }, 'OpenCode 用量面板'),
        React.createElement('p', { className: 'ocu-set-desc' }, '标题行与输入框相互独立：「启用用量显示（标题行）」只控制标题行，「输入框同心圆」只控制输入框。勾选项只影响缩小态，展开详情始终显示全部窗口；渠道过滤可限定只在指定模型 Provider 的会话中显示。配置持久保存在 ~/.dsh/ocu-config.json。'),
        React.createElement('div', { className: 'ocu-checkrow' },
          checkbox('enabled', '启用用量显示（标题行）'),
          checkbox('showCircle', '输入框同心圆（点击弹出 5h/周/月 详情）'),
          checkbox('showRolling', '5 小时（缩小态）'),
          checkbox('showWeekly', '本周（缩小态）'),
          checkbox('showMonthly', '本月（缩小态）')
        ),
        input('showProviders', '渠道过滤（模型 Provider ID，逗号分隔；留空=全部显示）', 'text', 'opencodego, deepseek'),
        input('workspaceId', 'Workspace ID', 'text', 'wrk_xxxxxxxx'),
        React.createElement('label', { className: 'ocu-field', key: 'cookie' },
          React.createElement('span', null, 'Auth Cookie（完整 Cookie 串）'),
          React.createElement('textarea', {
            className: 'ocu-input ocu-ta',
            rows: 4,
            value: form.cookie,
            placeholder: 'oc_locale=zh; auth=你的完整Cookie串',
            onChange: function (e) { set({ cookie: e.target.value }) },
          })
        ),
        input('intervalSec', '刷新间隔（秒，最小 10）', 'number', '60'),
        React.createElement('div', { className: 'ocu-btns' },
          React.createElement('button', { className: 'ocu-btn', onClick: save, disabled: busy }, '保存配置'),
          React.createElement('button', { className: 'ocu-btn', onClick: test, disabled: busy }, '测试连接')
        ),
        msg ? React.createElement('div', { className: 'ocu-msg ' + (msg.ok ? 'ocu-ok' : 'ocu-err') }, msg.text) : null
      )
    }

    // Usage indicator at the right end of the composer tool row (left of the
    // model select): a concentric ring stack that opens a ContextMeter-style
    // popup on click. Rings: outermost = 5h rolling, middle = week, innermost
    // = month. The popup lists 5h / 周 / 月, each row with its own absolute
    // progress bar (same scale as the header chip).
    var CIRCLE_RINGS = [
      { key: 'rolling', label: '5小时', r: 5.5, stroke: 1.6 },
      { key: 'weekly', label: '本周', r: 3.7, stroke: 1.5 },
      { key: 'monthly', label: '本月', r: 2.0, stroke: 1.5 },
    ]

    function UsageWidget() {
      var snapState = React.useState(null)
      var snap = snapState[0]
      var setSnap = snapState[1]
      var openState = React.useState(false)
      var open = openState[0]
      var setOpen = openState[1]

      React.useEffect(function () {
        var alive = true
        var timer = null
        var lastIntervalSec = 60

        var tick = function () {
          if (!alive) return
          apiUsage(false).then(function (r) {
            if (!alive) return
            setSnap(r)
            if (r && r.config) lastIntervalSec = r.config.intervalSec || lastIntervalSec
          })
        }
        var loop = function () {
          timer = window.setTimeout(function () { tick(); loop() }, lastIntervalSec * 1000)
        }
        tick()
        loop()
        return function () {
          alive = false
          if (timer) window.clearTimeout(timer)
        }
      }, [])

      // close on outside click / Escape
      React.useEffect(function () {
        if (!open) return
        var onDown = function (e) {
          if (e.target && e.target.closest && !e.target.closest('.ocu-circle-root')) setOpen(false)
        }
        var onKey = function (e) { if (e.key === 'Escape') setOpen(false) }
        document.addEventListener('pointerdown', onDown)
        document.addEventListener('keydown', onKey)
        return function () {
          document.removeEventListener('pointerdown', onDown)
          document.removeEventListener('keydown', onKey)
        }
      }, [open])

      var cfg = (snap && snap.config) || null
      var data = (snap && snap.ok && snap.data) ? snap.data : null

      if (cfg && cfg.showCircle === false) return null
      if (!data) return null

      var windows = CIRCLE_RINGS.map(function (w) {
        var u = data.windows[w.key]
        var pct = clampPct(u.usagePercent)
        return {
          key: w.key,
          label: w.label,
          r: w.r,
          stroke: w.stroke,
          pct: pct,
          resetInSec: Number(u.resetInSec) || 0,
          status: u.status || 'ok',
          color: pctColor(pct),
        }
      })
      var maxPct = Math.max.apply(null, windows.map(function (w) { return w.pct }))

      // Ring arcs: no arc at 0% (no stray round-cap dot), flat caps so the arc
      // length stays proportional at low percentages and at 100% there is no
      // cap blob where the arc meets itself. A tiny floor keeps 1-2% visible.
      var rings = windows.map(function (w) {
        var C = 2 * Math.PI * w.r
        var dash = w.pct <= 0 ? 0 : Math.max(C * w.pct / 100, 0.9)
        var arc = w.pct <= 0 ? null : React.createElement('circle', {
          cx: 7, cy: 7, r: w.r,
          stroke: w.color, strokeWidth: w.stroke, fill: 'none',
          strokeDasharray: dash + ' ' + C,
          transform: 'rotate(-90 7 7)',
        })
        return React.createElement('g', { key: w.key },
          React.createElement('circle', {
            cx: 7, cy: 7, r: w.r,
            stroke: 'var(--dsw-alias-border-l3)', strokeWidth: w.stroke, fill: 'none',
          }),
          arc
        )
      })

      var tooltipLines = windows.map(function (w) {
        return w.label + ': ' + w.pct + '% · ' + fmtReset(w.resetInSec) + '后重置'
      })

      var rows = windows.map(function (w) {
        return React.createElement(BarRow, {
          key: w.key,
          label: w.label,
          pct: w.pct,
          reset: fmtResetShort(w.resetInSec),
          title: w.label + '：' + w.pct + '% · ' + fmtReset(w.resetInSec) + '后重置',
        })
      })

      return React.createElement('div', { className: 'ocu-circle-root' },
        React.createElement('button', {
          type: 'button',
          className: 'ocu-circle-trigger',
          title: '额度用量\n' + tooltipLines.join('\n'),
          'aria-label': '额度用量',
          'aria-haspopup': 'dialog',
          'aria-expanded': open,
          onClick: function () { setOpen(!open) },
        },
          React.createElement('svg', {
            viewBox: '0 0 14 14', width: 14, height: 14, 'aria-hidden': true,
          }, rings)
        ),
        open ? React.createElement('div', { className: 'ocu-circle-panel', role: 'dialog', 'aria-label': '额度用量' },
          React.createElement('div', { className: 'ocu-circle-header' },
            React.createElement('span', { className: 'ocu-circle-headline' }, '额度用量'),
            React.createElement('span', { className: 'ocu-circle-percent' }, maxPct + '%')
          ),
          React.createElement('div', { className: 'ocu-circle-rows' }, rows)
        ) : null
      )
    }

    function apply(ctx) {
      var styleTag = document.createElement('style')
      styleTag.setAttribute('data-plugin', 'dsh-opencode-usage')
      styleTag.textContent = CSS
      document.head.appendChild(styleTag)

      var slots = ctx.get('slots')
      if (slots === undefined) {
        ctx.effect(function () { if (styleTag.parentNode) styleTag.parentNode.removeChild(styleTag) })
        return
      }

      var mdirs = ctx.get('modelDirectories')

      slots.inject('conversation.session.header.actions', function () {
        return slots.register(
          { name: 'conversation.session.header.actions', id: 'opencode-usage', order: 30, label: '用量' },
          function (props) {
            return React.createElement(UsageChip, {
              sessionId: props.sessionId,
              modelDirectories: mdirs,
            })
          }
        )
      })

      // Usage indicator (concentric rings) + inline detail rows, at the right
      // end of the composer tool row, just left of the model select.
      slots.inject('conversation.input.right', function () {
        return slots.register(
          { name: 'conversation.input.right', id: 'opencode-usage-circle', order: 0, label: '额度用量' },
          function () { return React.createElement(UsageWidget, null) }
        )
      })

      slots.inject('settings.section', function () {
        return slots.register(
          { name: 'settings.section', id: 'opencode-usage', order: 30, label: 'OpenCode 用量' },
          function () { return React.createElement(SettingsPage, null) }
        )
      })

      ctx.effect(function () {
        return function () {
          if (styleTag.parentNode) styleTag.parentNode.removeChild(styleTag)
        }
      })
    }

    module.exports = { name: 'dsh-opencode-usage', apply: apply }
    return module.exports
  },
})

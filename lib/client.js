window.__ModuleLoader__.load({
  id: '@local/dsh-opencode-usage',
  factory: function (require) {
    var module = { exports: {} }
    var React = require('react')

    var CSS = [
      '@keyframes ocu-pop{from{opacity:0;transform:translateY(-4px) scale(.97)}to{opacity:1;transform:none}}',
      '.ocu-bar{display:flex;align-items:center;gap:5px;font-size:11px;line-height:16px;white-space:nowrap;min-width:0}',
      '.ocu-bar-swatch{flex:none;width:8px;height:8px;border-radius:2px}',
      '.ocu-bar-label{flex:none;width:44px;overflow:hidden;color:var(--dsw-alias-label-secondary)}',
      '.ocu-bar-track{flex:1 1 auto;min-width:48px;height:5px;border-radius:999px;background:var(--dsw-alias-interactive-bg-hover);overflow:hidden}',
      '.ocu-bar-fill{display:block;height:100%;border-radius:999px;min-width:4px;transition:width .35s ease}',
      '.ocu-bar-val{flex:none;min-width:96px;text-align:left;white-space:nowrap}',
      '.ocu-bar-pct{font-variant-numeric:tabular-nums;font-weight:500}',
      '.ocu-bar-reset{font-size:10px;color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums}',
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
      '.ocu-circle-panel{z-index:2147483647;box-sizing:border-box;border:1px solid var(--dsw-alias-border-inverted);background:var(--dsw-specific-menu);width:264px;max-width:calc(100vw - 16px);box-shadow:var(--dsw-shadow-lv3);color:var(--dsw-alias-label-secondary);cursor:default;border-radius:12px;padding:12px;font-size:12px;line-height:20px;position:fixed;animation:ocu-pop .12s ease-out}',
      '.ocu-circle-header{align-items:center;gap:6px;display:flex}',
      '.ocu-icon-btn{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;margin-left:auto;flex:none;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:13px;line-height:1;padding:0}',
      '.ocu-icon-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}',
      '.ocu-circle-percent{color:var(--dsw-alias-label-primary);font-weight:500}',
      '.ocu-circle-headline{color:var(--dsw-alias-label-tertiary)}',
      '.ocu-circle-rows{margin:8px 0 0;display:flex;flex-direction:column;gap:3px}',
      '.ocu-circle-panel.ocu-narrow .ocu-bar-label{width:32px}',
      '.ocu-circle-panel.ocu-narrow .ocu-bar-val{min-width:0}',
      '.ocu-circle-panel.ocu-narrow .ocu-bar-reset{display:none}',
      '.ocu-circle-panel.ocu-narrow .ocu-bar-track{min-width:24px}',
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

    function rawPct(v) {
      return Math.round(Number(v) || 0)
    }

    function clampPct(v) {
      return Math.max(0, Math.min(100, rawPct(v)))
    }

    // One row of label + absolute progress bar + percent, shared by the header
    // popup and the composer circle popup.
    function BarRow(props) {
      var pct = props.pct
      // 与官方 ContextMeter 配色一致：填充中性色，数字主色
      var fill = 'var(--dsw-alias-label-tertiary)'
      return React.createElement('div', {
        className: 'ocu-bar',
        title: props.title || '',
      },
        React.createElement('span', { className: 'ocu-bar-swatch', style: { background: fill }, 'aria-hidden': true }),
        React.createElement('span', { className: 'ocu-bar-label' }, props.label),
        React.createElement('span', { className: 'ocu-bar-track' },
          React.createElement('span', { className: 'ocu-bar-fill', style: { width: pct + '%', background: fill } })
        ),
        React.createElement('span', { className: 'ocu-bar-val' },
          React.createElement('span', { className: 'ocu-bar-pct', style: { color: 'var(--dsw-alias-label-primary)' } }, pct + '%'),
          props.reset ? React.createElement('span', { className: 'ocu-bar-reset' }, ' · ' + props.reset) : null
        )
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
            workspaceId: c.workspaceId || '',
            cookie: c.cookie || '',
            intervalSec: c.intervalSec || 60,
            showCircle: c.showCircle !== false,
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
          workspaceId: form.workspaceId.trim(),
          cookie: form.cookie.trim(),
          intervalSec: Number(form.intervalSec) || 60,
          showCircle: form.showCircle !== false,
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
        React.createElement('p', { className: 'ocu-set-desc' }, '输入框同心圆：点击弹出 5h/周/月 用量详情。配置持久保存在 ~/.dsh/ocu-config.json。'),
        React.createElement('div', { className: 'ocu-checkrow' },
          checkbox('showCircle', '输入框同心圆（点击弹出 5h/周/月 详情）'),
        ),
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
      var hideTimerRef = React.useRef(null)
      var panelRef = React.useRef(null)
      var rootRef = React.useRef(null)

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

      var refresh = function (e) {
        if (e && e.stopPropagation) e.stopPropagation()
        apiUsage(true).then(function (r) { setSnap(r) })
      }

      // Escape 关闭（hover 场景鼠标移开即隐藏，无需 outside click 监听）
      React.useEffect(function () {
        if (!open) return
        var onKey = function (e) { if (e.key === 'Escape') setOpen(false) }
        document.addEventListener('keydown', onKey)
        return function () { document.removeEventListener('keydown', onKey) }
      }, [open])

      // 面板定位：fixed 相对视口，直接用视口坐标设置 left/top，天然最顶层
      // （z-index 2147483647），不受侧边栏遮挡与包含块影响。打开期间每帧
      // （rAF）检查，布局变化（侧边栏开关/拖动）自动跟随；位置达标不写入。
      // 水平优先级：① 不覆盖左侧栏（左缘 ≥ 可用区左缘，由按钮的祖先大容器
      // 探测 ≈ 聊天区/输入框左缘）→ ② 不超视口 → ③ 贴按钮右缘；仅当聊天区
      // 放不下弹窗宽度时才允许覆盖左侧栏（避无可避）。
      React.useLayoutEffect(function () {
        if (!open) return
        var el = panelRef.current
        var root = rootRef.current
        if (!el || !root) return
        var raf = null
        var contentLeft = function () {
          // 优先：最近的滚动容器（= 聊天区可视区域，左缘最精确）
          var node = root.parentElement
          while (node && node !== document.body && node !== document.documentElement) {
            var st = null
            try { st = window.getComputedStyle(node) } catch (e) { break }
            if (st && /(auto|scroll)/.test(st.overflowX + st.overflowY)) {
              var sr = node.getBoundingClientRect()
              if (sr.width > 0) return sr.left
            }
            node = node.parentElement
          }
          // 回退：大容器探测（宽度 ≥150、高度 ≥24，取最靠右的左缘）
          node = root.parentElement
          var left = 8
          while (node && node !== document.body && node !== document.documentElement) {
            var r = node.getBoundingClientRect()
            if (r.width >= 150 && r.height >= 24 && r.left > left) left = r.left
            node = node.parentElement
          }
          return left
        }
        var clamp = function () {
          var pr = el.getBoundingClientRect()
          var rr = root.getBoundingClientRect()
          var vw = window.innerWidth
          var vh = window.innerHeight
          var h = el.offsetHeight || pr.height
          // 可用区 = 聊天区（左缘 ≈ 左侧栏右缘，右缘 = 输入框右缘）
          var availLeft = contentLeft()
          if (!isFinite(availLeft)) availLeft = 8
          availLeft = Math.min(availLeft, rr.right - 8) // 防御：左缘不可能超过输入框右缘
          var availW = Math.max(0, rr.right - availLeft)
          // 弹窗宽度自适应聊天区；聊天区 < 200px 时放不下 → 隐藏面板（tooltip 兜底）
          var MIN_W = 200
          var w = Math.min(264, availW - 16)
          if (w < MIN_W) {
            if (el.style.display !== 'none') el.style.display = 'none'
            raf = window.requestAnimationFrame(clamp)
            return
          }
          if (el.style.display === 'none') el.style.display = ''
          if (Math.abs((el.offsetWidth || 0) - w) > 1) el.style.width = w + 'px'
          el.classList.toggle('ocu-narrow', w < 230)
          // 垂直：面板在按钮上方 8px；顶部不足 8px 则贴顶（输入框在底部，正常不会触发）
          var top = Math.max(8, rr.top - h - 8)
          // 水平：右缘贴输入框右缘，左缘不越过聊天区（永远不碰两侧栏）
          var left = Math.max(rr.right - w, availLeft)
          left = Math.max(left, 8) // 视口左缘兜底
          if (Math.abs(pr.left - left) > 1) el.style.left = left + 'px'
          if (Math.abs(pr.top - top) > 1) el.style.top = top + 'px'
          raf = window.requestAnimationFrame(clamp)
        }
        clamp()
        return function () {
          if (raf) window.cancelAnimationFrame(raf)
        }
      }, [open])

      // 窄布局检测：用量按钮与左侧相邻元素（权限按钮等）间距不足时直接隐藏
      // 按钮本身（弹窗自然随父隐藏）；带滞回避免边界抖动。
      React.useEffect(function () {
        var root = rootRef.current
        if (!root) return
        var raf = null
        var check = function () {
          var hidden = root.style.display === 'none'
          var prev = root.previousElementSibling
          if (prev) {
            var p = prev.getBoundingClientRect()
            var rr = root.getBoundingClientRect()
            if (!hidden && rr.width > 0 && rr.left < p.right + 2) {
              hidden = true // 与左侧元素重叠/间距 < 2px → 隐藏
            } else if (hidden) {
              var parent = root.parentElement
              if (parent) {
                var pr = parent.getBoundingClientRect()
                if (p.right + 38 <= pr.right - 2) hidden = false // 恢复：10px 间距 + 28px 按钮宽放得下
              }
            }
          }
          var want = hidden ? 'none' : ''
          if (root.style.display !== want) root.style.display = want
          raf = window.requestAnimationFrame(check)
        }
        check()
        return function () {
          if (raf) window.cancelAnimationFrame(raf)
        }
      }, [])

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
          color: 'var(--dsw-alias-label-tertiary)',
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

      return React.createElement('div', {
        ref: rootRef,
        className: 'ocu-circle-root',
        onMouseEnter: function () {
          window.clearTimeout(hideTimerRef.current)
          setOpen(true)
        },
        onMouseLeave: function () {
          hideTimerRef.current = window.setTimeout(function () { setOpen(false) }, 180)
        },
      },
        React.createElement('button', {
          type: 'button',
          className: 'ocu-circle-trigger',
          title: '额度用量\n' + tooltipLines.join('\n'),
          'aria-label': '额度用量',
          'aria-haspopup': 'dialog',
          'aria-expanded': open,
          onKeyDown: function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setOpen(!open)
            }
          },
        },
          React.createElement('svg', {
            viewBox: '0 0 14 14', width: 14, height: 14, 'aria-hidden': true,
          }, rings)
        ),
        open ? React.createElement('div', {
          ref: panelRef,
          className: 'ocu-circle-panel',
          role: 'dialog',
          'aria-label': '额度用量',
          onMouseEnter: function () { window.clearTimeout(hideTimerRef.current) },
          onMouseLeave: function () {
            hideTimerRef.current = window.setTimeout(function () { setOpen(false) }, 180)
          },
        },
          React.createElement('div', { className: 'ocu-circle-header' },
            React.createElement('span', { className: 'ocu-circle-headline' }, '额度用量'),
            React.createElement('span', { className: 'ocu-circle-percent' }, maxPct + '%'),
            React.createElement('button', {
              className: 'ocu-icon-btn',
              title: '立即刷新',
              onMouseDown: function (e) { e.preventDefault() },
              onClick: refresh,
            }, '↻')
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

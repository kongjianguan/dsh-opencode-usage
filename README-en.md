# dsh-opencode-usage

A persistent plugin for DeepSeek Harness (`dsh web`) that shows your **opencode.ai quota usage as a concentric-ring indicator** (5 hours / this week / this month) at the **right end of the composer tool row**, with a hover detail panel and a live reset countdown.

中文版：[README.md](./README.md)

## Install

1. Symlink this directory into the dsh web profile's module directory (so the loader can resolve it):

   ```bash
   ln -sfn "$PWD" ~/.dsh/profiles/node_modules/@local/dsh-opencode-usage
   ```

2. Append to `~/.dsh/profiles/web/cordis.patch.yml`:

   ```yaml
   - insert:
       - id: opencode-usage
         name: '@local/dsh-opencode-usage'
   ```

3. **Restart `dsh web`** (client modules are scanned at startup; hot reload works afterwards).

## Features

- **Composer ring** (optional, on by default): a three-layer concentric ring at the right end of the composer tool row (left of the model select) — innermost = month, middle = week, outermost = 5-hour quota. Arcs are drawn to the true percentage (no arc at 0%, no end-cap blob at 100%, proportional at low percentages).
- **Hover detail panel**: hovering the ring opens a 3-row breakdown (5h / week / month — progress bar + percentage + reset countdown, ticking every second); auto-dismisses 180ms after the mouse leaves; `Enter`/`Space` toggles, `Esc` closes.
- **Refresh button** (top-right of the panel): forces a fresh usage fetch (bypasses cache).
- **Always on top**: the panel is `position: fixed` with the maximum z-index — no sidebar can cover it.
- **Sidebar avoidance**: the panel auto-detects the chat area's available range (between the left and right sidebars), preferring to expand from the composer's right edge; it shifts right to keep clear of the left sidebar as the chat area narrows.
- **Adaptive width**: ≥264px chat area → full 264px panel; 264–200px → shrinks to chat width −16px (compact mode: tighter labels, reset countdown hidden); **<200px → panel hidden, falls back to the native tooltip** (button `title` with a 3-line summary).
- **Auto-hide button**: when the layout narrows and the usage button would overlap its left neighbors (e.g. the approval button), the button hides itself; it reappears automatically once space allows (with hysteresis against flicker).
- **Colors aligned with the official ContextMeter** (zero hardcoded colors — every value is a dsh web design token, following the active theme):
  - Panel: background `--dsw-specific-menu`, border `--dsw-alias-border-inverted` (hairline), shadow `--dsw-shadow-lv3`, radius 12px, body text `label-secondary`, figures `label-primary`
  - Button/ring: icon `label-secondary`, hover background `interactive-bg-hover`, ring track `border-l3`, ring fill `label-tertiary`
  - Progress bars: track `interactive-bg-hover`, fill & swatch `label-tertiary`, percentage `label-primary`
  - Settings page: success `state-success-primary` / error `state-error-primary` messages; everything else follows dsh default tokens
- **Native tooltip coordination**: the button's native tooltip is cleared while the panel is open (no double prompts); it acts as the fallback when the panel is hidden for lack of space.
- **Settings page** (Settings → OpenCode Usage): Workspace ID, full Auth Cookie, refresh interval, composer-ring toggle; persisted to `~/.dsh/ocu-config.json` (0600), survives restarts.

## Usage

Settings → **OpenCode Usage**: enter the Workspace ID and the full Auth Cookie (open opencode.ai in a browser, copy the `auth` cookie from DevTools), then click "Test Connection".

## How it works

- **Two-part structure**: `lib/index.js` is the Host plugin (Cordis plugin); `lib/client.js` is the browser bundle (`window.__ModuleLoader__.load(...)`, discovered via the `dsh.client` field in `package.json`).
- **RPC**: the client calls Host-registered `webServer` routes over same-origin `fetch`: `GET/POST /ocu/api/config`, `POST /ocu/api/usage`.
- **Data source**: the Host runs `curl` via `subprocess` against `https://opencode.ai/workspace/{workspaceId}/go` and parses the embedded `lite.subscription.get` payload (`rollingUsage` / `weeklyUsage` / `monthlyUsage`, with `usagePercent` and `resetInSec`).
- **Panel positioning**: the client clamps the panel every frame (`requestAnimationFrame`) using viewport coordinates — fixed on top, constrained to the chat area, tracking the button; layout changes (sidebar toggling/dragging, window resize) are corrected automatically.

## Security

- **Never commit your auth cookie or workspace ID.** The source defaults are empty; real values live only in `~/.dsh/ocu-config.json` (0600).
- API routes listen on the local dsh service only; do not expose them in untrusted environments.

## License

MIT — see [LICENSE](./LICENSE)

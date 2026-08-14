# dsh-opencode-usage

DeepSeek Harness（`dsh web`）持久化插件：在**输入框工具行右侧**显示 **opencode.ai 额度用量同心圆**（5 小时 / 本周 / 本月），hover 弹出详情面板，实时重置倒计时。

## 功能

- **输入框同心圆**（可选，默认开启）：在输入框工具行右侧（模型名左侧）显示三层同心圆——最内层月、中间层周、最外层 5 小时额度；圆环按真实百分比绘制（0% 不画弧、100% 无端帽凸起、低百分比保持比例）
- **hover 详情面板**：鼠标悬停同心圆即弹出 5h / 周 / 月 三行详情（进度条 + 百分比 + 重置倒计时，每秒实时跳动）；移开 180ms 自动收起；键盘 `Enter`/`Space` 可切换、`Esc` 关闭
- **面板右上角刷新按钮**：点击强制刷新用量（绕过缓存）
- **最顶层显示**：面板 `position: fixed` + 最大 z-index，不被任何侧边栏遮挡
- **不覆盖侧边栏**：面板自动探测聊天区可用范围（左右侧边栏之间），优先贴输入框右缘展开；聊天区变窄时右移避让左侧栏
- **宽度自适应**：聊天区 ≥264px 时面板 264px 正常显示；264–200px 时收缩至聊天区宽−16px（紧凑模式：压缩 label、隐藏重置倒计时）；**<200px 时隐藏面板，降级为原生 tooltip**（按钮 title 三行摘要）
- **按钮自动隐藏**：窄布局下用量按钮与左侧元素（权限按钮等）重叠时自动隐藏按钮本身，空间恢复后自动显示（带滞回防抖动）
- **配色对齐官方 ContextMeter**：面板/按钮/圆环全部使用 dsh web 设计令牌（`--dsw-specific-menu`、`--dsw-alias-border-inverted`、`--dsw-shadow-lv3`、`label-tertiary` 等），随主题切换
- **原生 tooltip 协调**：弹窗打开时清空按钮原生 tooltip，避免双重提示；弹窗隐藏（空间不足）时原生 tooltip 兜底
- **设置页**（设置 → OpenCode 用量）：Workspace ID、完整 Auth Cookie、刷新间隔、输入框同心圆开关；配置持久化到 `~/.dsh/ocu-config.json`（0600），重启不丢

## 安装

1. 把本目录链接进 dsh web profile 的模块目录（让 loader 能解析）：

   ```bash
   ln -sfn "$PWD" ~/.dsh/profiles/node_modules/@local/dsh-opencode-usage
   ```

2. 在 `~/.dsh/profiles/web/cordis.patch.yml` 追加：

   ```yaml
   - insert:
       - id: opencode-usage
         name: '@local/dsh-opencode-usage'
   ```

3. **重启 `dsh web`**（客户端模块扫描需重启生效；之后插件支持热重载）。

## 使用

设置 → **OpenCode 用量**：填入 Workspace ID 和完整 Auth Cookie（浏览器打开 opencode.ai，从开发者工具复制 `auth` cookie），点"测试连接"。

## 工作原理

- **双端结构**：`lib/index.js` 是 Host 插件（Cordis plugin），`lib/client.js` 是浏览器 bundle（`window.__ModuleLoader__.load(...)`，由 `package.json` 的 `dsh.client` 声明发现）。
- **RPC**：Client 通过同源 `fetch` 调用 Host 注册的 `webServer` 路由：`GET/POST /ocu/api/config`、`POST /ocu/api/usage`。
- **数据源**：Host 用 `subprocess` 跑 `curl` 抓取 `https://opencode.ai/workspace/{workspaceId}/go`，解析页面内嵌的 `lite.subscription.get` 数据（`rollingUsage` / `weeklyUsage` / `monthlyUsage`，含 `usagePercent` 与 `resetInSec`）。
- **面板定位**：Client 每帧（`requestAnimationFrame`）按视口坐标钳制面板位置——固定在最顶层、约束在聊天区范围内、跟随按钮移动；布局变化（侧边栏开关/拖动、窗口缩放）自动纠正。

## 安全

- **切勿把 auth cookie 或 workspace ID 提交到仓库**。源码默认值为空，实际值只存在于 `~/.dsh/ocu-config.json`（0600）。
- API 路由仅监听本机 dsh 服务，请勿在不可信环境暴露。

## 许可证

MIT — see [LICENSE](./LICENSE)

# anycon.ai 网站 — 给 coding agent 的工作约定

这是 Anycon 的官网仓库，只放静态站。产品代码、文档和公共 hub 的实现都在 [anycon-ai/anycon](https://github.com/anycon-ai/anycon)，这里只做展示和链接，不复制那边的规格。

## 不可违反

- 安全 / 隐私相关的文字要和主仓库一致、精确（主仓库 ADR-32）：说「hub 只看到元数据」「Web UI 的代码由 hub 下发」，不写「hub 永远看不到内容」。改隐私相关文案前先对照主仓库 `README.md` 的 Privacy model 一节。
- 不写竞品名字。
- 产物是纯静态文件：不引入需要服务端运行时的功能。默认零客户端 JS，需要交互再加。
- 部署配置（域名、反代、证书、密钥）不进这个仓库。

## 命令

`bun install` · `bun run dev` · `bun run check` · `bun run build`

## 结构

- `src/pages/index.astro` 英文首页（默认语言）、`src/pages/zh/index.astro` 中文首页。两页只传 `lang`，内容在组件里按 `lang` 取文案。
- `src/i18n/` 文案字典，en 和 zh 的 key 必须一致（`Dict` 类型保证）。
- `src/styles/global.css` 颜色 token 沿用主仓库 `web/src/index.css`，暗色跟随系统。
- `public/` 的 logo、图标从主仓库 `web/public/` 复制，改 logo 要两边同步。

## 风格

- TS 严格模式，无 `any`。
- 注释用中文，标识符用英文。面向用户的文案走 i18n，不写死在组件里。
- 提交信息用 conventional commits。改动走 PR 合到 `main`。

import type { Dict } from './index'

// 中文文案。key 和 en.ts 一致。
export const zh: Dict = {
  lang: 'zh',
  htmlLang: 'zh-CN',
  otherLang: { href: '/', label: 'English' },
  meta: {
    title: 'Anycon — coding agent 跑在你自己的机器上，从任何地方和它对话。',
    description:
      'Anycon 把跑 AI coding agent 的机器接到一个叫 hub 的小中继上，让你从浏览器、手机、终端或脚本驱动 Claude Code 和 Codex。自建、端到端加密、开源。',
  },
  nav: { docs: '文档', github: 'GitHub', install: '安装' },
  hero: {
    title: 'coding agent 跑在你自己的机器上。',
    titleAccent: '从任何地方和它对话。',
    lead:
      'Anycon 把跑 AI agent 的那台机器（家里的 Mac mini、工作站、服务器）接到一个叫 hub 的小中继上，然后你可以从浏览器、手机、终端或脚本驱动这些 agent。机器主动出站连 hub：不需要公网 IP，不需要 VPN，不需要端口转发。',
    primary: '开始使用',
    secondary: '在 GitHub 上查看',
    status: 'v0.1 · Apache-2.0 · 支持 Claude Code 和 Codex',
  },
  diagram: {
    machine: '你的机器',
    hub: 'hub',
    clients: '客户端',
    machineLines: ['anycon daemon', '├ Claude Code', '└ Codex, …'],
    hubLines: ['anycon-hub', '只转发密文', '只看到元数据'],
    clientLines: ['Web UI / PWA', 'anycon CLI', 'TypeScript SDK'],
    outbound: '出站连接',
    transport: 'HTTPS / WebSocket',
    e2e: '端到端加密（Noise）',
  },
  why: {
    heading: '为什么用 Anycon',
    lead:
      '厂商的云端 agent 跑在厂商的沙箱里：代码克隆进容器，依赖重装，内网服务够不到。Anycon 让 agent 留在你自己的机器上，本地数据库、GPU、凭据、装好的工具都在，外面只是一条线。',
    items: [
      { title: '自建优先', body: 'hub 就是一个容器加一个 SQLite 文件，没有外部依赖。' },
      {
        title: 'hub 只看到元数据',
        body: '会话历史在你的机器上。客户端和 daemon 之间是 Noise 端到端加密，hub 只转发密文、只看到元数据。',
      },
      { title: 'agent 无关', body: 'Claude Code、Codex 开箱即用，其它 agent 通过 adapter 接口接入。' },
      {
        title: '文件夹即项目',
        body: 'workspace 目录下每个文件夹就是一个项目。在任何客户端都能新建、克隆，或者关联机器上已有的目录。',
      },
      {
        title: '真正的编码工作流',
        body: '每个会话可以有自己的 git worktree 和分支。看 diff、同步 base、审批权限请求、让 agent 提交和开 PR。',
      },
      { title: '协议优先', body: 'Web UI、CLI、SDK 走同一套公开协议。' },
    ],
  },
  tradeoffs: {
    heading: '代价也说清楚',
    items: [
      '没有隔离。agent 以你的用户身份跑在你的机器上，workspace 边界靠 agent 自己的权限审批，不是 OS 级沙箱。',
      '机器要常开，联网、备份都是你的事。',
      '模型 API 照样看得到上下文。你机器上的 Claude Code 依然把提示发给它的模型提供方，Anycon 不改变这一点。',
    ],
    notInScope: '不做：终端和远程 shell、编辑器、经 hub 预览本地 dev server、issue 跟踪、团队协作。',
  },
  quickstart: {
    heading: '快速开始',
    lead: 'hub 需要 Docker。anycon（daemon 和 CLI 是同一个二进制）支持 macOS 和 Linux。',
    steps: [
      {
        title: '启动 hub',
        body: '可以和 agent 在同一台机器上，也可以放在两边都能访问的任何地方。TLS 和域名由你的反向代理处理。',
        code: `docker run -d --name anycon-hub -p 8080:8080 -v anycon-data:/data \\
  -e ANYCON_PUBLIC_URL=https://hub.example.com ghcr.io/anycon-ai/hub:latest
docker logs anycon-hub    # 首次启动会打印一次管理员 token`,
      },
      {
        title: '安装并配对 daemon',
        body: '在跑 agent 的那台机器上执行。',
        code: `brew install anycon-ai/tap/anycon
anycon init --hub https://hub.example.com --workspace ~/anycon --name mac-mini --yes
anycon daemon             # 或 anycon service install
anycon pair               # 打印 16 位配对码和配对链接`,
      },
      {
        title: '在浏览器里打开 hub',
        body: '用管理员 token 登录，输入配对码。~/anycon/ 下的每个文件夹现在都是一个可以在任何地方操作的项目。',
        code: null,
      },
    ],
    docsLink: '完整部署文档',
  },
  clients: {
    heading: '三种客户端，一套协议',
    items: [
      {
        title: 'Web UI',
        body: '由 hub 提供，可安装为 PWA。流式 Markdown、工具调用渲染、diff、权限审批、每会话 worktree、图片附件、Web Push。英文和中文。',
      },
      { title: 'CLI', body: '在任何终端里新建会话、实时看输出，权限请求直接在终端里答复。' },
      { title: 'TypeScript SDK', body: '配对一次，之后从脚本和 CI 连接节点、驱动会话。' },
    ],
    cliCode: `anycon connect https://hub.example.com --code 7K3P-Q2MX-4FWD-H8RT
anycon new --project my-app "run the tests and fix whatever fails"`,
  },
  privacy: {
    heading: '隐私模型',
    items: [
      '会话历史存在你的机器（daemon）上，不在 hub 上。',
      'daemon 和每个客户端之间是 Noise 端到端加密。hub 看到的是元数据：哪台设备和哪台设备通信、什么时候、多少字节，以及设备名、账号标识这类账号层数据。',
      'Web UI 的代码由 hub 下发。恶意或被入侵的 hub 可以下发改过的 JavaScript，读走浏览器里的密钥和明文。用 Web UI 就是信任那个 hub 的运营者。隐私敏感的使用请自建 hub，或者用 CLI / SDK，它们的代码由你自己安装。',
      '配对码在 daemon 上生成，不经过 hub。两端用 Argon2id 从配对码派生预共享密钥。',
      'Anycon 不是沙箱。',
    ],
    link: '完整威胁模型和安全策略',
  },
  publicHub: {
    heading: '公共 hub',
    badge: 'v0.2 计划中',
    body:
      'anycon.ai 将运行一个有资源限制的公共 hub，作为自建之前的试用入口。它跑的是和所有自建 hub 相同的开源 release，成本和捐赠会在这里公开。隐私敏感的使用仍然建议自建。',
    link: '查看路线图',
  },
  footer: {
    docs: '文档',
    github: 'GitHub',
    releases: '发布',
    security: '安全',
    license: 'Apache-2.0',
  },
}

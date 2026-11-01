import type { Dict } from './index'

// 中文文案。key 和 en.ts 一致。
export const zh: Dict = {
  lang: 'zh',
  htmlLang: 'zh-CN',
  otherLang: { label: 'English' },
  meta: {
    title: 'Anycon — coding agent 跑在你自己的机器上，从任何地方和它对话。',
    description:
      'Anycon 把跑 AI coding agent 的机器接到一个叫 hub 的小中继上，让你从浏览器、手机、终端或脚本驱动 Claude Code、Codex 和其他 coding agent。可以直接用 hub.anycon.ai 上的公共 hub，也可以自建。端到端加密、开源。',
  },
  nav: { docs: '文档', github: 'GitHub', publicHub: '公共 hub', install: '安装' },
  hero: {
    title: 'coding agent 跑在你自己的机器上。',
    titleAccent: '从任何地方和它对话。',
    lead:
      'Anycon 把跑 AI agent 的那台机器（家里的 Mac mini、工作站、服务器）接到一个叫 hub 的小中继上，然后你可以从浏览器、手机、终端或脚本驱动这些 agent。机器主动出站连 hub：不需要公网 IP，不需要 VPN，不需要端口转发。',
    primary: '试用公共 hub',
    secondary: '自建',
    tertiary: '在 GitHub 上查看',
    status: 'v0.2 · Apache-2.0 · 支持 Claude Code、Codex 和 ACP agent',
  },
  diagram: {
    machine: '你的机器',
    hub: 'hub',
    clients: '客户端',
    machineLines: ['anycon daemon', '├ Claude Code', '└ Codex, …'],
    hubLines: ['anycon-hub', '只转发密文', '只看到元数据'],
    clientLines: ['Web UI / PWA', 'anycon CLI', 'TypeScript SDK'],
    pipes: {
      machine: { name: 'WebSocket', note: '你的机器主动出站' },
      client: { name: 'HTTPS / WebSocket', note: '客户端发起连接' },
    },
    e2e: '端到端加密（Noise）',
    prompt: '跑一下测试',
    reply: '42 个测试通过',
    encrypt: '加密',
    decrypt: '解密',
    devices: { machine: 'mac-mini', client: 'phone' },
    envelope: { from: '发送方', to: '接收方', size: '大小', body: '内容' },
    summary:
      '动画示意：在客户端输入的提示先在客户端加密，hub 只转发密文，到你机器上的 daemon 才解密；agent 的回复按原路返回。hub 能读到的只有信封上的元数据，比如发送方、接收方和大小。',
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
      {
        title: 'agent 无关',
        body: 'Claude Code、Codex，以及 OpenCode、Gemini CLI、Goose 等说 Agent Client Protocol 的 agent 开箱即用，其它 agent 通过 adapter 接口接入。',
      },
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
    notInScope: '不做：终端和远程 shell、编辑器、经 hub 明文反代 dev server（预览走自己的端到端加密隧道）、issue 跟踪、团队协作。',
  },
  tryPublic: {
    heading: '在公共 hub 上试用',
    lead: '不用自己搭服务器：hub.anycon.ai 上的公共 hub 已经开放注册。你只需要在跑 agent 的机器上装 daemon。',
    steps: [
      {
        title: '登录',
        body: '打开 hub.anycon.ai，用邮箱登录。我们会给你发一个一次性验证码，第一次登录就会创建账号。',
        code: null,
      },
      {
        title: '安装 daemon 并发起配对',
        body: '在跑 agent 的那台机器上执行。hub 的首次设置页面也会按你的平台给出同样的命令。',
        code: `brew install anycon-ai/tap/anycon
anycon init --hub https://hub.anycon.ai --workspace ~/anycon --name mac-mini --yes
anycon service install    # 在后台运行 daemon，登录时自动启动
anycon pair               # 打印 16 位配对码和配对链接`,
      },
      {
        title: '输入配对码',
        body: '回到浏览器，输入配对码或打开配对链接。~/anycon/ 下的每个文件夹现在都是一个可以在任何地方操作的项目。手机和其他浏览器也用同样的方式配对。',
        code: null,
      },
    ],
    plan: '免费套餐：每个账号一个节点（一台运行 daemon 的机器），最多 10 台设备（含这个节点）。',
    open: '打开 hub.anycon.ai',
    agree: ['创建账号即表示你同意', '，并已阅读', '。'],
    terms: '服务条款',
    privacy: '隐私政策',
  },
  quickstart: {
    heading: '自建 hub',
    lead: 'hub 需要 Docker。anycon（daemon 和 CLI 是同一个二进制）支持 macOS、Linux 和 Windows，Windows 的安装方式见部署文档。',
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
        body: '由 hub 提供，可安装为 PWA。流式 Markdown、工具调用渲染、diff、权限审批、每会话 worktree、文件附件、dev server 预览、全文搜索、只读文件浏览、Web Push。英文和中文。',
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
      'dev server 预览跑在单独的域名上，经自己的 Noise 隧道到 daemon。hub 看得到有一个预览开着、流量多大，看不到页面内容。预览的加载代码同样由 hub 下发，信任前提和 Web UI 一样。',
      'Anycon 不是沙箱。',
    ],
    link: '完整威胁模型和安全策略',
  },
  publicHub: {
    heading: '公共 hub',
    badge: '已开放',
    body:
      'hub.anycon.ai 跑的是和所有自建 hub 相同的开源 release，让你在自建之前先试用 Anycon。隐私敏感的使用仍然建议自建：Web UI 的代码由 hub 下发，在公共 hub 上用 Web UI 就是信任它的运营者。在公共 hub 上做敏感的事，请用 CLI 或 SDK。',
    link: '打开 hub.anycon.ai',
  },
  footer: {
    docs: '文档',
    github: 'GitHub',
    releases: '发布',
    security: '安全',
    privacy: '隐私政策',
    terms: '服务条款',
    license: 'Apache-2.0',
  },
  legal: {
    updated: '最后更新：',
    translationNote: '本页是英文版的中文译本，仅供参考；两者不一致时以英文版为准。',
    privacy: {
      title: '隐私政策',
      description: 'anycon.ai 公共 hub（hub.anycon.ai）和 anycon.ai 网站处理哪些个人数据、为什么、保留多久。',
    },
    terms: {
      title: '服务条款',
      description: '使用 anycon.ai 公共 hub（hub.anycon.ai）的条款。',
    },
  },
}

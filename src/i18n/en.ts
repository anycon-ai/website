// 英文文案（默认语言）。zh.ts 的 key 必须和这里一致，由 Dict 类型保证。
export const en = {
  lang: 'en',
  htmlLang: 'en',
  otherLang: { href: '/zh/', label: '简体中文' },
  meta: {
    title: 'Anycon — Run coding agents on your own machine. Talk to them from anywhere.',
    description:
      'Anycon connects the machine that runs your AI coding agents to a small relay called the hub, so you can drive Claude Code and Codex from a browser, your phone, a terminal, or a script. Self-hosted, end-to-end encrypted, open source.',
  },
  nav: { docs: 'Docs', github: 'GitHub', install: 'Install' },
  hero: {
    title: 'Run coding agents on your own machine.',
    titleAccent: 'Talk to them from anywhere.',
    lead:
      'Anycon connects the machine that runs your AI agents (a Mac mini at home, a workstation, a server) to a small relay called the hub. Drive those agents from a browser, your phone, a terminal, or a script. The machine dials out, so you need no public IP, no VPN, and no port forwarding.',
    primary: 'Get started',
    secondary: 'View on GitHub',
    status: 'v0.1 · Apache-2.0 · Claude Code and Codex supported',
  },
  diagram: {
    machine: 'your machine',
    hub: 'hub',
    clients: 'clients',
    machineLines: ['anycon daemon', '├ Claude Code', '└ Codex, …'],
    hubLines: ['anycon-hub', 'relays ciphertext', 'sees metadata only'],
    clientLines: ['Web UI / PWA', 'anycon CLI', 'TypeScript SDK'],
    // 两段连接：用的协议，以及由哪一端发起
    pipes: {
      machine: { name: 'WebSocket', note: 'your machine dials out' },
      client: { name: 'HTTPS / WebSocket', note: 'the client connects' },
    },
    e2e: 'end-to-end encrypted (Noise)',
    // 动画里演示的一来一回
    prompt: 'run the tests',
    reply: '42 tests passed',
    encrypt: 'encrypt',
    decrypt: 'decrypt',
    devices: { machine: 'mac-mini', client: 'phone' },
    envelope: { from: 'from', to: 'to', size: 'size', body: 'body' },
    summary:
      'Animated diagram: a prompt typed on a client is encrypted on that client, relayed by the hub as ciphertext, and decrypted by the daemon on your machine. The agent’s reply travels back the same way. The hub reads only envelope metadata such as sender, recipient, and size.',
  },
  why: {
    heading: 'Why Anycon',
    lead:
      'Vendor cloud agents run in the vendor’s sandbox: your repo is cloned into a container, dependencies are reinstalled, and your internal services are out of reach. Anycon keeps the agent on your machine, with your local databases, GPUs, credentials, and tools already in place, and gives you a remote line to it.',
    items: [
      {
        title: 'Self-host first',
        body: 'The hub is one container and one SQLite file, with no external services.',
      },
      {
        title: 'The hub only sees metadata',
        body: 'Session history lives on your machine. Clients and the daemon talk over end-to-end encrypted Noise sessions. The hub routes ciphertext and sees metadata.',
      },
      {
        title: 'Agent-agnostic',
        body: 'Claude Code and Codex work out of the box. More agents can be added through the adapter interface.',
      },
      {
        title: 'Folders are projects',
        body: 'Every folder in the workspace directory is a project. Create, clone, or link existing directories from any client.',
      },
      {
        title: 'A real coding workflow',
        body: 'Each session can get its own git worktree and branch. Review diffs, sync with the base branch, approve permission requests, let the agent commit and open PRs.',
      },
      {
        title: 'Protocol first',
        body: 'The Web UI, CLI, and SDK all use the same public protocol.',
      },
    ],
  },
  tradeoffs: {
    heading: 'The trade-offs, stated plainly',
    items: [
      'No isolation. Agents run as your user on your machine. Workspace boundaries rely on the agent’s own permission prompts, not an OS sandbox.',
      'Your machine has to stay on, and keeping it online and backed up is up to you.',
      'The model API still sees your context. The Claude Code on your machine still sends prompts to its provider. Anycon doesn’t change that.',
    ],
    notInScope: 'Not in scope: terminals and remote shells, editors, previewing local dev servers through the hub, issue tracking, team collaboration.',
  },
  quickstart: {
    heading: 'Quick start',
    lead: 'You need Docker for the hub. The anycon binary (daemon and CLI in one) runs on macOS and Linux.',
    steps: [
      {
        title: 'Run a hub',
        body: 'On the same machine as the agents, or anywhere both sides can reach. TLS and your domain are handled by your reverse proxy.',
        code: `docker run -d --name anycon-hub -p 8080:8080 -v anycon-data:/data \\
  -e ANYCON_PUBLIC_URL=https://hub.example.com ghcr.io/anycon-ai/hub:latest
docker logs anycon-hub    # prints a one-time admin token on first start`,
      },
      {
        title: 'Install and pair the daemon',
        body: 'On the machine that runs your agents.',
        code: `brew install anycon-ai/tap/anycon
anycon init --hub https://hub.example.com --workspace ~/anycon --name mac-mini --yes
anycon daemon             # or: anycon service install
anycon pair               # prints a 16-character code and a pairing link`,
      },
      {
        title: 'Open the hub in a browser',
        body: 'Sign in with the admin token and enter the pairing code. Every folder under ~/anycon/ is now a project you can work in from anywhere.',
        code: null,
      },
    ],
    docsLink: 'Full deployment guide',
  },
  clients: {
    heading: 'Three clients, one protocol',
    items: [
      {
        title: 'Web UI',
        body: 'Served by the hub and installable as a PWA. Streaming Markdown, tool-call rendering, diffs, permission approvals, per-session worktrees, image attachments, Web Push. English and Chinese.',
      },
      {
        title: 'CLI',
        body: 'Create sessions and stream output from any terminal. Answer permission requests inline.',
      },
      {
        title: 'TypeScript SDK',
        body: 'Pair once, then connect to a node and drive sessions from scripts and CI.',
      },
    ],
    cliCode: `anycon connect https://hub.example.com --code 7K3P-Q2MX-4FWD-H8RT
anycon new --project my-app "run the tests and fix whatever fails"`,
  },
  privacy: {
    heading: 'Privacy model',
    items: [
      'Session history is stored on your machine (the daemon), never on the hub.',
      'The daemon and every client talk over Noise end-to-end encryption. The hub sees metadata: which device talks to which, when, and how many bytes, plus account-level data like device names and account identifiers.',
      'The Web UI’s code is served by the hub. A malicious or compromised hub could serve modified JavaScript and read keys and plaintext in your browser. Using the Web UI means trusting the operator of that hub. For sensitive use, self-host the hub, or use the CLI / SDK, whose code you install yourself.',
      'Pairing codes are generated on the daemon and never sent to the hub. Both sides derive the pre-shared key from the code with Argon2id.',
      'Anycon is not a sandbox.',
    ],
    link: 'Full threat model and security policy',
  },
  publicHub: {
    heading: 'Public hub',
    badge: 'Planned for v0.2',
    body:
      'anycon.ai will run a public hub with resource limits as a try-before-you-self-host entry point. It runs the same open-source release as every self-hosted hub, and its costs and donations will be published here. Self-hosting remains the recommended way to use Anycon for anything sensitive.',
    link: 'Follow the roadmap',
  },
  footer: {
    docs: 'Documentation',
    github: 'GitHub',
    releases: 'Releases',
    security: 'Security',
    license: 'Apache-2.0',
  },
} as const

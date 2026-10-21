# anycon.ai

The website for [Anycon](https://github.com/anycon-ai/anycon): homepage, links to the docs, and the public hub's status and policies once it launches.

Static site built with [Astro](https://astro.build) and Tailwind. English is the default language (`/`), Chinese is served under `/zh/`.

```bash
bun install
bun run dev      # http://localhost:4321
bun run check    # type-check .astro / .ts
bun run build    # static output in dist/
```

CI builds `dist/` on every push and PR. Deployment of the artifact to anycon.ai is handled outside this repository.

Licensed under Apache-2.0, same as Anycon.

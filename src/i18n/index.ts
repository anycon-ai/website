// 文案字典。en 是真源，Dict 类型由它推导，zh 必须给出同样的 key。
import { en } from './en'
import { zh } from './zh'

export type Lang = 'en' | 'zh'

// 把 en 的字面量类型放宽成 string / string[]，让 zh 能填不同的值。
type Widen<T> = T extends string
  ? string
  : T extends null
    ? null
    : T extends readonly (infer U)[]
      ? readonly Widen<U>[]
      : T extends object
        ? { [K in keyof T]: Widen<T[K]> }
        : T
export type Dict = Widen<typeof en>

export const dicts: Record<Lang, Dict> = { en, zh }

export const links = {
  hub: 'https://hub.anycon.ai',
  repo: 'https://github.com/anycon-ai/anycon',
  docs: 'https://github.com/anycon-ai/anycon/tree/main/docs',
  deploy: 'https://github.com/anycon-ai/anycon/blob/main/docs/deploy.md',
  roadmap: 'https://github.com/anycon-ai/anycon/blob/main/docs/roadmap.md',
  security: 'https://github.com/anycon-ai/anycon/blob/main/SECURITY.md',
  releases: 'https://github.com/anycon-ai/anycon/releases',
  quickstart: 'https://github.com/anycon-ai/anycon#quick-start',
} as const

// 站内页面的路径：英文不带语言前缀，中文在 /zh/ 下。
export type Page = 'home' | 'privacy' | 'terms'
export function pagePath(lang: Lang, page: Page): string {
  const prefix = lang === 'en' ? '/' : '/zh/'
  return page === 'home' ? prefix : `${prefix}${page}`
}

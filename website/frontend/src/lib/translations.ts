export type Lang = 'en' | 'zh'

const EN: Record<string, string> = {}
const ZH: Record<string, string> = {}

export function getTranslation(lang: Lang, key: string): string {
  return key
}

export { EN, ZH }

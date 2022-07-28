export type Language = {
  name: string
  flag: string
  height: string
}
export interface ILanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

import { LOCALES } from './data'

export interface Locale {
  locale: string
  name: string
}

export const locales: Locale[] = LOCALES

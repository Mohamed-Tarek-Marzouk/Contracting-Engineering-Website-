import { type Locale } from "@/i18n-config";

type Translatable = 
  | string 
  | { en: string; ar: string; };

export const getLabelForLocale = (lang: Locale) => (item: Translatable): string => {
  if (typeof item === 'string') {
    return item;
  }
  return item[lang];
}

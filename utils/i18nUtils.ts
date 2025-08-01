// utils/i18nUtils.ts
import { i18n } from '../assets/i18n';
import type { LanguageCode } from '../types/types';

export function extractFromI18n(path: string): Record<LanguageCode, string> {
    const langs = Object.keys(i18n) as LanguageCode[];

    return langs.reduce((acc, lang) => {
        const value = path
            .split('.')
            .reduce((obj: any, key: string) => obj?.[key], i18n[lang]);

        if (typeof value !== 'string') {
            throw new Error(`Falta la traducción para "${path}" en "${lang}"`);
        }

        acc[lang] = value;
        return acc;
    }, {} as Record<LanguageCode, string>);
}

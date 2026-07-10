import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import en from './locales/en.ts'
import fa from './locales/fa.ts'

export const LANGUAGES = {
    EN: 'en',
    FA: 'fa',
} as const

const updateDocumentLanguage = (language: string) => {
    const normalizedLanguage = language.startsWith(LANGUAGES.FA) ? LANGUAGES.FA : LANGUAGES.EN

    document.documentElement.lang = normalizedLanguage
    document.documentElement.dir = normalizedLanguage === LANGUAGES.FA ? 'rtl' : 'ltr'
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: en},
            fa: {translation: fa},
        },
        fallbackLng: LANGUAGES.EN,
        supportedLngs: Object.values(LANGUAGES),
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'lang',
            caches: ['localStorage'],
        },
    })

updateDocumentLanguage(i18n.language)
i18n.on('languageChanged', updateDocumentLanguage)

export default i18n

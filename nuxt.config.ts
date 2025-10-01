// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module'],
    compatibilityDate: '2025-07-15',
    ssr: true,
    devtools: { enabled: true },
    i18n: {
        // if not using RTL, you can replace locales with codes only
        // locales: ['en', 'es', 'ar'],
        locales: [{
            code: 'en-US',
            name: 'English (US)',
        }, {
            code: 'en-UK',
            name: 'English (UK)',
        }, {
            code: 'es-ES',
            name: 'Español (España)',
        }, {
            code: 'es-CO',
            name: 'Español (Colombia)',
        }, {
            code: 'ar-EG',
            name: 'العربية',
            dir: 'rtl',
        }],
        defaultLocale: 'en-US',
        strategy: 'prefix_except_default', // or 'prefix_except_default'
        vueI18n: './i18n.config.ts',
    },
    vuetify: {
        moduleOptions: {
            ssrClientHints: {
                reloadOnFirstRequest: false,
                prefersColorScheme: true,
                prefersColorSchemeOptions: {
                    useBrowserThemeOnly: false,
                },
                viewportSize: true,
            },
        },
        enableVuetifyRules: true,
    },
})

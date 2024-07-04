import aliasConfig from './nuxt-vite.config.js';

const baseUrl = '/';

export default defineNuxtConfig({
    typescript: false,
    modules: ['~/modules/coscom-lib/module'],
    components: [
        '~/components',
        {
            path: '~/components/layout',
            prefetch: false
        }
    ],
    vite: aliasConfig,
    nitro: {
        alias: aliasConfig.resolve.alias
    },
    routeRules: {
        '/accessibility': { redirect: { to: '/guides/accessibility', statusCode: 301 } },
        '/installation': { redirect: { to: '/installation', statusCode: 301 } }
    },
    coscom: {
        options: {
            ripple: true
        },
        layerOrder: 'coscom',
        resolvePath: function ({ as, from, type }) {
            const resolvedPath = from.replace('coscom', '@/components/lib');

            return type === 'component' ? `${resolvedPath}/${as}.vue` : `${resolvedPath}/${as}.js`;
        }
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'Coscom UI is a lightweight UI components library made for internal usage. It offers a set of easily customisable components and doesnt depend on any specific style or CSS framework.',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Coscom UI is a lightweight UI components library for VueJS made for internal use.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@coscomui' },
                { name: 'twitter:title', content: 'Coscom UI | Vue UI Component Library' },
                { name: 'twitter:description', content: 'Coscom UI is a lightweight UI components library for VueJS made for internal use.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'Coscom UI | Vue UI Component Library' },
                { property: 'og:url', content: 'https://coscom.de' },
                { property: 'og:description', content: 'Coscom UI is a lightweight UI components library for VueJS made for internal use.' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [{ rel: 'icon', href: baseUrl + 'favicon.ico' }],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    runtimeConfig: {
        public: {
            contextPath: baseUrl
        }
    },
    css: ['@/assets/styles/flexbox.css', '/node_modules/@coscom/coscom-icons/style.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/layout/landing/_landing.scss', '@/assets/styles/layout/layout.scss']
});

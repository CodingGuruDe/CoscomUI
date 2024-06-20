const $appState = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$appState = reactive({
            theme: 'skyblue-light',
            darkTheme: false,
            codeSandbox: false,
            sourceType: 'options-api',
            newsActive: false,
            announcement: null,
            ripple: false,
            storageKey: 'coscomui'
        });
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($appState);
});

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    watch: {
        $route: {
            handler(to) {
                if (to.name === 'index') {
                    this.themeChangeListener({ theme: this.$appState.darkTheme ? 'skyblue-dark' : 'skyblue-light', dark: this.$appState.darkTheme });
                }
            }
        }
    },
    created() {
        useServerHead({
            link: [
                {
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: '/themes/skyblue-light/theme.css'
                },
                {
                    id: 'home-table-link',
                    rel: 'stylesheet',
                    href: '/styles/landing/themes/skyblue-light/theme.css'
                }
            ]
        });
    },
    mounted() {
        EventBus.on('theme-change', this.themeChangeListener);
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
    },
    methods: {
        themeChangeListener(event) {
            if (!document.startViewTransition) {
                this.applyTheme(event);

                return;
            }

            document.startViewTransition(() => this.applyTheme(event));
        },
        applyTheme(event) {
            this.$coscom.changeTheme(this.$appState.theme, event.theme, 'theme-link', () => {
                this.$appState.theme = event.theme;
                this.$appState.darkTheme = event.dark;

                EventBus.emit('theme-change-complete', { theme: event.theme, dark: event.dark });
            });
        }
    }
};
</script>

<style lang="scss"></style>

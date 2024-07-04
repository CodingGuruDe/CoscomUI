<template>
    <div :class="landingClass">
        <AppTopBar @darkswitch-click="onDarkModeToggle" />
        <HeroSection />
        <FooterSection />
    </div>
</template>

<script>
import FooterSection from '@/components/landing/FooterSection.vue';
import HeroSection from '@/components/landing/HeroSection.vue';
import EventBus from '@/layouts/AppEventBus';
import AppTopBar from '@/layouts/AppTopBar.vue';

export default {
    setup() {
        definePageMeta({
            layout: 'custom'
        });
    },
    props: {
        theme: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            tableTheme: 'skyblue-light'
        };
    },
    themeChangeListener: null,
    methods: {
        onDarkModeToggle() {
            const newTheme = this.$appState.darkTheme ? 'skyblue-light' : 'skyblue-dark';
            const newTableTheme = this.$appState.darkTheme ? this.tableTheme.replace('dark', 'light') : this.tableTheme.replace('light', 'dark');

            EventBus.emit('theme-change', { theme: newTheme, dark: !this.$appState.darkTheme });
            this.replaceTableTheme(newTableTheme);
        },
        onTableThemeChange(value) {
            this.replaceTableTheme(value);
        },
        replaceTableTheme(newTheme) {
            const elementId = 'home-table-link';
            const linkElement = document.getElementById(elementId);
            const tableThemeTokens = linkElement?.getAttribute('href').split('/') || null;
            const currentTableTheme = tableThemeTokens ? tableThemeTokens[tableThemeTokens.length - 2] : null;

            if (currentTableTheme !== newTheme && tableThemeTokens) {
                const newThemeUrl = linkElement.getAttribute('href').replace(currentTableTheme, newTheme);

                const cloneLinkElement = linkElement.cloneNode(true);

                cloneLinkElement.setAttribute('id', elementId + '-clone');
                cloneLinkElement.setAttribute('href', newThemeUrl);
                cloneLinkElement.addEventListener('load', () => {
                    linkElement.remove();
                    cloneLinkElement.setAttribute('id', elementId);
                });
                linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling);

                this.tableTheme = newTheme;
            }
        }
    },
    computed: {
        landingClass() {
            return ['landing', { 'layout-dark': this.$appState?.darkTheme, 'layout-light': !this.$appState?.darkTheme }];
        }
    },
    components: {
        AppTopBar,
        HeroSection,
        FooterSection
    }
};
</script>

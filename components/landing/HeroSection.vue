<template>
    <section class="n-layout n-layout--absolute-positioned" :position="isMobile ? 'static' : 'absolute'" :style="isMobile ? undefined : 'top: 64px;'">
        <div class="n-scrollbar">
            <div class="n-scrollbar-container">
                <div class="n-scrollbar-content">
                    <div class="banner" style="overflow: hidden">
                        <right-image v-if="!(isMobile || isTablet)" class="right-image" />
                        <h1 :style="titleStyle" class="naive-title object" data-value="-3">
                            <span @mouseenter="handleTitleMouseEnter" @mouseleave="handleTitleMouseLeave">Coscom UI</span>
                        </h1>
                        <p style="font-size: 16px; margin-top: 0; margin-bottom: 0">
                            {{ intro1 }}
                        </p>
                        <p style="font-size: 16px; margin-bottom: 4px; margin-top: 4px; font-weight: 500">
                            {{ intro2 }}
                        </p>
                        <p style="font-size: 16px; margin-top: 0">
                            {{ intro3 }}
                        </p>
                        <div>
                            <button type="default" class="n-button n-button--primary-type n-button--large-type" size="large" style="margin-right: 12px; border: 1px solid #e0e0e6" @click="toggleDarkMode">
                                {{ intro4 }}
                            </button>
                            <NuxtLink to="/installation" class="n-button n-button--primary-type n-button--large-type" size="large" style="background-color: #2080f0; color: #fff">
                                <span>{{ start }}</span>
                            </NuxtLink>
                        </div>
                        <left-image class="left-image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
import { NodeService } from '@/service/NodeService';
import { useIsMobile, useIsTablet } from '../../utils/composables';
import leftImage from './Left.vue';
import rightImage from './Right.vue';

export default {
    themeChangeListener: null,
    emits: ['menubutton-click', 'configbutton-click', 'darkswitch-click'],
    data() {
        const isMobileRef = useIsMobile();

        return {
            start: 'Get Started',
            intro1: 'A Vue 3 Component Library',
            intro2: 'Fairly Complete, Theme Customizable, Uses TypeScript, Fast',
            intro3: 'Kinda Interesting',
            intro4: 'Change Theme',
            hover: false,
            isMobile: isMobileRef,
            isTablet: useIsTablet()
        };
    },
    beforeUnmount() {
        EventBus.off('theme-change-complete', this.themeChangeListener);
    },
    mounted() {
        EventBus.on('theme-change-complete', this.themeChangeListener);
        NodeService.getTreeNodes().then((data) => (this.nodes = data));

        document.addEventListener('mousemove', parallax);

        function parallax(e) {
            document.querySelectorAll('.object').forEach(function (move) {
                var moving_value = move.getAttribute('data-value');
                var x = (e.clientX * moving_value) / 250;
                var y = (e.clientY * moving_value) / 250;

                move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
            });
        }
    },
    methods: {
        toggleDarkMode(event) {
            this.$emit('darkswitch-click', event);
        },
        handleTitleMouseEnter() {
            this.hover = true;
        },
        handleTitleMouseLeave() {
            this.hover = false;
        }
    },
    computed: {
        titleStyle() {
            return 'margin-top: 0; font-size: 80px !important';
        },
        useIsMobile() {
            const breakpointRef = useBreakpoint();

            return useMemo(() => {
                return breakpointRef.value === 'xs';
            });
        },
        useIsTablet() {
            const breakpointRef = useBreakpoint();

            return useMemo(() => {
                return breakpointRef.value === 's';
            });
        },
        useIsSmallDesktop() {
            const breakpointRef = useBreakpoint();

            return useMemo(() => {
                return breakpointRef.value === 'm';
            });
        }
    },
    components: {
        leftImage,
        rightImage
    }
};
</script>

<template>
    <div :ref="containerRef" class="layout-topbar">
        <div class="layout-topbar-inner">
            <div class="layout-topbar-logo-container">
                <NuxtLink to="/" class="layout-topbar-logo" aria-label="Coscom logo">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 82" width="372" height="82">
                        <g id="Layer">
                            <path
                                fill="#b9b9b9"
                                d="m355.2 7.5q-0.1 0-0.2 0h-23.9v0.1c-3 0.1-5.7 1.8-7.1 4.4-1.4-2.6-4.1-4.4-7.3-4.5h-25.1c-4.6 0.2-8.3 3.9-8.3 8.6q0 0.1 0 0.2v54.1c0.1 1.4 1.2 2.6 2.7 2.6h13.9c1.4 0 2.6-1.2 2.7-2.6v-4.2-3.9-35.1c0-1.5 1.2-2.6 2.6-2.6h7.9c0.9 0 1.6 0.4 2.1 1q0.1 0.1 0.1 0.1 0.1 0.2 0.2 0.3 0 0.1 0.1 0.2 0 0.2 0.1 0.3 0 0.1 0 0.2 0.1 0.2 0.1 0.5v36.8 6.3c0 1.5 1.2 2.7 2.7 2.7h10.5c1.5-0.1 2.6-1.2 2.7-2.7v-5.6-0.7-1.9-34.9q0-0.2 0-0.5 0 0 0.1-0.1 0-0.2 0.1-0.4 0 0 0-0.1 0.1-0.2 0.2-0.3 0-0.1 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0.1-0.1 0.1-0.1 0.3-0.3 0 0 0.1 0c0.4-0.3 0.9-0.4 1.4-0.4h7.9c1.5 0 2.5 1.2 2.5 2.7v34.9 8.1c0 1.4 1.2 2.6 2.6 2.7h13.9c1.4-0.2 2.5-1.3 2.5-2.7v-54.8c-0.3-4.5-4-8-8.5-8z"
                            />
                            <path
                                fill="#b9b9b9"
                                fill-rule="evenodd"
                                d="m56.8 16.5c0-4.9 4-9 9-9h38.3c4.9 0 9 4.1 9 9v47.5c0 5-4.1 9-9 9h-38.3c-5 0-9-4-9-9zm19.3 37.2c0 1.6 1.3 3 3 3h11.8c1.7 0 3-1.4 3-3v-26.2c0-1.6-1.3-3-3-3h-11.8c-1.7 0-3 1.4-3 3z"
                            />
                            <path
                                fill="#b9b9b9"
                                fill-rule="evenodd"
                                d="m218.7 16.5c0-4.9 4.1-9 9-9h38.3c5 0 9 4.1 9 9v47.5c0 5-4 9-9 9h-38.3c-4.9 0-9-4-9-9zm19.4 37.2c0 1.6 1.3 3 3 3h11.8c1.6 0 3-1.4 3-3v-26.2c0-1.6-1.4-3-3-3h-11.8c-1.7 0-3 1.4-3 3z"
                            />
                            <path
                                fill="#b9b9b9"
                                d="m45.7 7.5q-0.1 0-0.1 0h-29.3c-4.6 0.1-8.4 3.9-8.4 8.6q0 0 0 0v48.4 0.2c0.1 4.5 3.7 8.1 8.1 8.3h29.6q0 0 0.1 0c1.5 0 2.7-1.2 2.7-2.8q0-0.2 0-0.4v-10.7c-0.2-1.3-1.3-2.4-2.7-2.4q-0.1 0-0.1 0h-7.7-7.7-0.2c-1.5 0-2.7-1.2-2.7-2.6v-26.9c0-1.5 1.2-2.6 2.7-2.6h0.2 15.4q0 0 0.1 0c1.5 0 2.7-1.3 2.7-2.8q0 0 0 0v-11.5q0 0 0 0c0-1.5-1.2-2.8-2.7-2.8z"
                            />
                            <path
                                fill="#b9b9b9"
                                d="m158.9 7.5q0 0 0 0h-28.5c-4.7 0.1-8.5 3.8-8.5 8.5v24.6c0 4.6 3.6 8.2 8.1 8.5h9.9c1.4 0 2.6 1.2 2.6 2.6v2.4c0 1.4-1.2 2.6-2.6 2.6h-5.3-4.6-5.1-0.4c-1.5 0.1-2.6 1.3-2.6 2.7v10.9c0 1.5 1.2 2.6 2.6 2.7h5.5 4.6 18.5q0 0 0 0c4.7 0 8.6-3.8 8.6-8.5q-0.1-0.1-0.1-0.3h0.1v-23.2h-0.1c-0.1-4.4-3.6-7.9-8-8.2h-9.7c-1.4 0-2.6-1.2-2.6-2.6v-3c0-1.5 1.2-2.6 2.6-2.6h9.7 5.3q0 0 0 0c1.5 0 2.8-1.3 2.8-2.8q-0.1-0.2-0.1-0.4h0.1v-11.2h-0.1c0-1.5-1.2-2.7-2.7-2.7z"
                            />
                            <path
                                fill="#b9b9b9"
                                d="m207.6 7.5q0 0-0.1 0h-29.2c-4.6 0.1-8.3 3.8-8.4 8.4h-0.1v48.8h0.1c0.1 4.5 3.6 8.1 8.1 8.3h29.5q0.1 0 0.1 0c1.6 0 2.8-1.2 2.8-2.8q0-0.2-0.1-0.4h0.1v-10.7h-0.1c-0.1-1.3-1.3-2.4-2.7-2.4q0 0-0.1 0h-7.7-7.7-0.2c-1.4 0-2.6-1.2-2.6-2.6v-26.9c0-1.5 1.2-2.6 2.6-2.6h0.2 15.4q0.1 0 0.1 0c1.6 0 2.8-1.3 2.8-2.8q0 0 0 0v-11.5q0 0 0 0c0-1.5-1.2-2.8-2.8-2.8z"
                            />
                        </g>
                    </svg>
                </NuxtLink>
                <NuxtLink to="/" class="layout-topbar-icon" aria-label="Coscom logo">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 105 105">
                        <circle cx="52.64" cy="52.5" r="50.33" fill="#ffed00" />
                        <path
                            d="M72.48,23.16c0-1.48-1.2-2.69-2.69-2.69c-0.03,0-0.06,0.01-0.09,0.01v-0.01H41.08v0c-4.58,0.03-8.28,3.75-8.28,8.33  c0,0.03,0,0.05,0,0.08h0l0,47.3l0,0l0,0v0.24h0.01c0.12,4.36,3.59,7.88,7.93,8.08v0.02H69.7v-0.01c0.03,0,0.06,0.01,0.09,0.01  c1.48,0,2.69-1.2,2.69-2.69c0-0.14-0.02-0.28-0.04-0.42h0.04V70.97h-0.03c-0.16-1.33-1.28-2.36-2.65-2.36  c-0.03,0-0.06,0.01-0.09,0.01v-0.01h-7.56H54.6h-0.19c-1.42,0-2.58-1.15-2.58-2.58V39.71c0-1.42,1.15-2.58,2.58-2.58h0.19v0h15.1  v-0.01c0.03,0,0.06,0.01,0.09,0.01c1.48,0,2.69-1.2,2.69-2.69c0-0.02,0-0.03,0-0.05h0V23.16L72.48,23.16  C72.48,23.16,72.48,23.16,72.48,23.16z"
                        />
                    </svg>
                </NuxtLink>
            </div>

            <div class="nav-end">
                <button size="small" class="v-button nav-picker" @click="toggleDarkMode">
                    <i :class="['cs surface-card text-700', { 'el-moon': $appState.darkTheme, 'el-sun': !$appState.darkTheme }]"></i>
                </button>

                <li>
                    <a :href="repoUrl" class="v-button v-button--default-type v-button--small-type nav-picker" target="_blank" rel="noopener noreferrer"> GitHub </a>
                </li>
                <button size="small" class="v-button nav-picker">
                    {{ versions[0].name }}
                </button>

                <li v-if="showMenuButton" class="menu-button">
                    <button
                        type="button"
                        class="flex flex-shrink-0 px-link border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary menu-button"
                        @click="onMenuButtonClick"
                        aria-haspopup
                        aria-label="Menu"
                    >
                        <i class="cs el-bars text-700"></i>
                    </button>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import pkg from '@/package.json';
import docsearch from '@docsearch/js';
import { repoUrl } from '@/utils/github-url';

export default {
    emits: ['menubutton-click', 'configbutton-click', 'darkswitch-click'],
    outsideClickListener: null,
    props: {
        showMenuButton: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            versions: [
                {
                    name: 'v4',
                    version: 'v4-beta.1',
                    url: '#'
                },
                {
                    name: 'v3',
                    version: pkg.version,
                    url: '#'
                },
                {
                    name: 'v2',
                    version: '2.10.4',
                    url: '#'
                }
            ]
        };
    },
    scrollListener: null,
    container: null,
    mounted() {
        this.bindScrollListener();

        // docsearch({
        //     container: '#docsearch',
        //     appId: '01CMUF4W4R',
        //     indexName: 'primevue',
        //     apiKey: '9bb5939e36897b26ff7de5b7b64d6c43',
        //     transformItems: (items) => {
        //         const isLocalhost = process.env.NODE_ENV !== 'production';

        //         return items.map((item) => {
        //             if (isLocalhost) {
        //                 const url = new URL(item.url);

        //                 url.protocol = window.location.protocol;
        //                 url.hostname = window.location.hostname;
        //                 url.port = window.location.port;
        //                 item.url = url.toString();
        //             }

        //             return item;
        //         });
        //     }
        // });
    },
    beforeUnmount() {
        if (this.scrollListener) {
            this.unbindScrollListener();
        }
    },
    methods: {
        onMenuButtonClick(event) {
            this.$emit('menubutton-click', event);
        },
        toggleDarkMode(event) {
            this.$emit('darkswitch-click', event);
        },
        bindScrollListener() {
            if (!this.scrollListener) {
                if (this.container) {
                    this.scrollListener = () => {
                        if (window.scrollY > 0) this.container.classList.add('layout-topbar-sticky');
                        else this.container.classList.remove('layout-topbar-sticky');
                    };
                }
            }

            window.addEventListener('scroll', this.scrollListener);
        },
        unbindScrollListener() {
            if (this.scrollListener) {
                window.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.isOutsideTopbarMenuClicked(event)) {
                        this.unbindOutsideClickListener();
                    }
                };

                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideTopbarMenuClicked(event) {
            return !(this.$refs.topbarMenu.isSameNode(event.target) || this.$refs.topbarMenu.contains(event.target));
        },
        containerRef(el) {
            this.container = el;
        }
    }
};
</script>

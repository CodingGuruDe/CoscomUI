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
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                            fill="var(--text-color)"
                        />
                    </svg>
                </NuxtLink>
            </div>

            <ul class="flex list-none m-0 p-0 gap-2 align-items-center">
                <li>
                    <div id="docsearch"></div>
                </li>
                <li>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex flex-shrink-0 px-link border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                    >
                        <i class="cs el-github text-700"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex flex-shrink-0 px-link border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                    >
                        <i class="cs el-discord text-700"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex flex-shrink-0 px-link border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                    >
                        <i class="cs el-comments text-700"></i>
                    </a>
                </li>
                <li>
                    <button
                        type="button"
                        class="flex flex-shrink-0 px-link border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                        @click="toggleDarkMode"
                    >
                        <i :class="['cs text-700', { 'el-moon': $appState.darkTheme, 'el-sun': !$appState.darkTheme }]"></i>
                    </button>
                </li>
                <li class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        type="button"
                        style="max-width: 8rem"
                        class="px-link flex align-items-center surface-card h-2rem px-2 border-1 border-solid surface-border transition-all transition-duration-300 hover:border-primary"
                    >
                        <span class="text-900 block white-space-nowrap overflow-hidden"> {{ versions[1].version }}</span>
                        <span class="ml-2 pi pi-angle-down text-600"></span>
                    </button>

                    <div class="p-3 surface-overlay hidden absolute right-0 top-auto border-round shadow-2 origin-top w-8rem">
                        <ul class="list-none m-0 p-0">
                            <li v-for="version in versions" :key="version.version" role="none">
                                <a :href="version.url" class="inline-flex p-2 border-round hover:surface-hover w-full">
                                    <span class="font-bold text-900">{{ version.name }}</span>
                                    <span class="ml-2 text-700 white-space-nowrap block overflow-hidden text-overflow-ellipsis">{{ version.version }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
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
            </ul>
        </div>
    </div>
</template>

<script>
import pkg from '@/package.json';
import docsearch from '@docsearch/js';

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
                    url: 'https://v4.primevue.org'
                },
                {
                    name: 'v3',
                    version: pkg.version,
                    url: 'https://primevue.org'
                },
                {
                    name: 'v2',
                    version: '2.10.4',
                    url: 'https://www.primefaces.org/primevue-v2'
                }
            ]
        };
    },
    scrollListener: null,
    container: null,
    mounted() {
        this.bindScrollListener();

        docsearch({
            container: '#docsearch',
            appId: '01CMUF4W4R',
            indexName: 'primevue',
            apiKey: '9bb5939e36897b26ff7de5b7b64d6c43',
            transformItems: (items) => {
                const isLocalhost = process.env.NODE_ENV !== 'production';

                return items.map((item) => {
                    if (isLocalhost) {
                        const url = new URL(item.url);

                        url.protocol = window.location.protocol;
                        url.hostname = window.location.hostname;
                        url.port = window.location.port;
                        item.url = url.toString();
                    }

                    return item;
                });
            }
        });
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

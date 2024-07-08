<template>
    <div v-if="!embedded" class="doc-section-code">
        <div class="doc-section-code-buttons scalein animation-duration-300">
            <template v-if="codeMode !== 'basic' && !hideToggleCode">
                <button :class="['py-0 px-2 border-round h-2rem', { 'code-active': codeLang === 'composition' }]" @click="codeLang = 'composition'">Composition API</button>
                <button :class="['py-0 px-2 border-round h-2rem', { 'code-active': codeLang === 'options' }]" @click="codeLang = 'options'">Options API</button>
            </template>

            <template v-if="!hideToggleCode">
                <button v-tooltip.bottom="{ value: 'Toggle Full Code', class: 'doc-section-code-tooltip' }" type="button" @click="toggleCodeMode('composition')" class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center">
                    <i class="cs el-code"></i>
                </button>
            </template>

            <template v-if="!hideToggleCode && code.data">
                <button v-tooltip.bottom="{ value: 'View Data', class: 'doc-section-code-tooltip' }" type="button" @click="onToggleData" class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center">
                    <i class="cs el-database"></i>
                </button>
            </template>

            <template v-if="!hideCodeSandbox">
                <button v-tooltip.bottom="{ value: 'Edit in CodeSandbox', class: 'doc-section-code-tooltip' }" type="button" class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center" @click="showCodesandbox">
                    <svg role="img" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display: 'block'">
                        <path
                            d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"
                        />
                    </svg>
                </button>
            </template>

            <button v-tooltip.bottom="{ value: 'Copy Code', class: 'doc-section-code-tooltip' }" type="button" @click="copyCode" class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center">
                <i class="cs el-copy"></i>
            </button>
        </div>

        <div>
            <template v-if="codeMode === 'basic' && importCode">
                <pre v-code.script><code>{{ code.basic }}
</code></pre>
            </template>

            <template v-if="codeMode === 'basic' && !importCode">
                <pre v-code><code>{{ code.basic }}
</code></pre>
            </template>

            <template v-if="codeMode !== 'basic' && codeLang === 'options'">
                <pre v-code><code>{{ code.options }}
</code></pre>
            </template>

            <template v-if="codeMode !== 'basic' && codeLang === 'composition'">
                <pre v-code><code>{{ code.composition }}
</code></pre>
            </template>

            <template v-if="codeMode !== 'basic' && codeLang === 'data'">
                <pre v-code.json><code>{{ code.data }}
</code></pre>
            </template>
        </div>
    </div>
    <div v-else id="embed"></div>
</template>

<script>
import { useCodeSandbox } from './codeeditor';

export default {
    inheritAttrs: false,
    props: {
        code: {
            type: null,
            default: null
        },
        service: {
            type: Array,
            default: null
        },
        hideToggleCode: {
            type: Boolean,
            default: false
        },
        hideCodeSandbox: {
            type: Boolean,
            default: false
        },
        dependencies: {
            type: null,
            default: null
        },
        component: {
            type: String,
            default: null
        },
        extFiles: {
            type: null,
            default: null
        },
        importCode: {
            type: Boolean,
            default: false
        },
        embedded: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            codeMode: 'basic',
            codeLang: this.code['options'] ? 'composition' : 'basic'
        };
    },
    methods: {
        toggleCodeMode(content) {
            this.codeMode = this.codeMode === 'basic' ? content : 'basic';
        },
        onToggleData() {
            this.toggleCodeMode('data');
            this.codeLang = 'data';
        },
        showCodesandbox() {
            console.log(this.code);
            useCodeSandbox(this.codeLang, this.code[this.codeLang === 'data' ? 'options' : this.codeLang], this.service, this.code.pages, this.dependencies, this.component, this.extFiles);
        },
        async copyCode() {
            await navigator.clipboard.writeText(this.code[this.codeLang]);
        }
    }
};
</script>

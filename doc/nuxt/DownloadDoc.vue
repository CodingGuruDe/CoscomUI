<template>
    <DocSectionText v-bind="$attrs">
        <p>
            CoscomUI is available for download on <a href="https://www.npmjs.com/package/primevue">npm Registry</a> along with the official
            <a href="https://www.npmjs.com/package/nuxt-primevue" target="_blank" rel="noopener noreferrer">nuxt-primevue</a> module.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install primevue
npm install --save-dev nuxt-primevue

# Using yarn
yarn add primevue
yarn add --dev nuxt-primevue

# Using pnpm
pnpm add primevue
pnpm add -D nuxt-primevue
`
            }
        };
    }
};
</script>

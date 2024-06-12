<template>
    <DocSectionText v-bind="$attrs">
        <p>CoscomUI is available for download on <a href="https://www.npmjs.com/package/coscom/coscom-ui/">npm Registry</a>.</p>
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
npm install @coscom/coscom-ui

# Using yarn
yarn add @coscom/coscom-ui

# Using pnpm
pnpm add @coscom/coscom-ui
`
            }
        };
    }
};
</script>

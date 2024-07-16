<template>
    <DocSectionText v-bind="$attrs">
        <p>Coscom UI is available for installation from <a href="https://www.npmjs.com/package/@coscom/coscom-ui/" target="_blank">npm Registry</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideCodeSandbox />
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
`
            }
        };
    }
};
</script>

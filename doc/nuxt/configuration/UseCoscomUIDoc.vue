<template>
    <DocSectionText v-bind="$attrs">
        <p>Whether to install the CoscomUI plugin, defaults to <i>true</i>. Disable this option if you prefer to configure CoscomUI manually e.g. with a Nuxt plugin.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
coscomui: {
    useCoscomUI: true
}
`
            }
        };
    }
};
</script>

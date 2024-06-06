<template>
    <DocSectionText v-bind="$attrs">
        <p>Main configuration settings of CoscomUI, refer to the <NuxtLink to="/configuration">configuration</NuxtLink> documentation for details. Defaults to an empty object.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
primevue: {
    options: {
        unstyled: true,
        ripple: true,
        inputStyle: 'filled'
    }
}
`
            }
        };
    }
};
</script>

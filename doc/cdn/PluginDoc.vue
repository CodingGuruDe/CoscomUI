<template>
    <DocSectionText v-bind="$attrs">
        <p>
            CoscomUI plugin is required to be installed as an application plugin to set up the default <NuxtLink to="/configuration">configuration</NuxtLink>. The plugin is lightweight, only sets up the configuration object without affecting your
            application.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
app.use(coscomui.config.default);
`
            }
        };
    }
};
</script>

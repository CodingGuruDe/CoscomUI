<template>
    <DocSectionText v-bind="$attrs">
        <p>
            CoscomUI ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths. For a live preview, use the configurator
            <span class="border-round inline-flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center bg-primary"><span class="cs el-palette"></span></span> at the topbar to switch themes.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz scrollable />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
coscom/resources/themes/aura-light-blue/theme.css
coscom/resources/themes/aura-light-green/theme.css
coscom/resources/themes/aura-dark-blue/theme.css
coscom/resources/themes/aura-dark-green/theme.css
coscom/resources/themes/lara-light-blue/theme.css
coscom/resources/themes/lara-light-green/theme.css
coscom/resources/themes/lara-dark-blue/theme.css
coscom/resources/themes/lara-dark-green/theme.css
`
            }
        };
    }
};
</script>

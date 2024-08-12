<template>
    <DocSectionText v-bind="$attrs">
        <p>Normalize is another utility to reset CSS of the standard elements. While importing the CSS file, assign it to a layer and define the layer order with coscomui coming after the normalized layer.</p>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
@layer normalize, coscomui;

@import "normalize.css" layer(normalize-reset);
`
            }
        };
    }
};
</script>

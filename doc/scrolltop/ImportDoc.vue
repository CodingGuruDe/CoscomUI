<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import ScrollTop from '@coscom/coscom-ui/scrolltop';
`
            }
        };
    }
};
</script>

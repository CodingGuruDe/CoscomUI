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
import OverlayPanel from '@coscom/coscom-ui/overlaypanel';
`
            }
        };
    }
};
</script>

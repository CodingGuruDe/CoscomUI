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
import ContextMenu from '@coscom/coscom-ui/contextmenu';
`
            }
        };
    }
};
</script>

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
import TreeTable from '@coscom/coscom-ui/treetable';
import Column from '@coscom/coscom-ui/column';
`
            }
        };
    }
};
</script>

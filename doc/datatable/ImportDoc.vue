<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import DataTable from '@coscom/coscom-ui/datatable';
import Column from '@coscom/coscom-ui/column';
import ColumnGroup from '@coscom/coscom-ui/columngroup';   // optional
import Row from '@coscom/coscom-ui/row';                   // optional
`
            }
        };
    }
};
</script>

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
import TabView from '@coscom/coscom-ui/tabview';
import TabPanel from '@coscom/coscom-ui/tabpanel';
`
            }
        };
    }
};
</script>

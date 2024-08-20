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
import Tab from '@coscom/coscom-ui/tab';
import TabPanel from '@coscom/coscom-ui/tabpanel';
`
            }
        };
    }
};
</script>

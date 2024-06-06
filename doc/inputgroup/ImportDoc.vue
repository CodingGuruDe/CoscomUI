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
import InputGroup from '@coscom/coscom-ui/inputgroup';
import InputGroupAddon from '@coscom/coscom-ui/inputgroupaddon';
`
            }
        };
    }
};
</script>

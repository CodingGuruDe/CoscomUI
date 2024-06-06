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
import SplitButton from '@coscom/coscom-ui/splitbutton';
`
            }
        };
    }
};
</script>

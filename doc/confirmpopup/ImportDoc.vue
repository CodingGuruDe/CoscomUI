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
import ConfirmPopup from '@coscom/coscom-ui/confirmpopup';
`
            }
        };
    }
};
</script>

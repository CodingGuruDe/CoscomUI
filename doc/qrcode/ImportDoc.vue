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
import QrCode from '@coscom/coscom-ui/qrcode';
`
            }
        };
    }
};
</script>

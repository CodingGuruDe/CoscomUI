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
import IconField from '@coscom/coscom-ui/iconfield';
import InputIcon from '@coscom/coscom-ui/inputicon';
`
            }
        };
    }
};
</script>

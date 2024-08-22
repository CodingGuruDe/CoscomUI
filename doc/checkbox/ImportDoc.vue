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
import Checkbox from '@coscom/coscom-ui/checkbox';
`
            }
        };
    }
};
</script>

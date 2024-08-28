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
import FloatButton from '@coscom/coscom-ui/floatbutton';
`
            }
        };
    }
};
</script>

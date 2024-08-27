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
import Accordion from '@coscom/coscom-ui/accordion';
import AccordionTab from '@coscom/coscom-ui/accordiontab';
`
            }
        };
    }
};
</script>

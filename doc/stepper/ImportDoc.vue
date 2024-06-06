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
import Stepper from '@coscom/coscom-ui/stepper';
import StepperPanel from '@coscom/coscom-ui/stepperpanel';
`
            }
        };
    }
};
</script>

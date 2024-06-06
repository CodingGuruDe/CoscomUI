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
import Terminal from '@coscom/coscom-ui/terminal';
import TerminalService from '@coscom/coscom-ui/terminalservice'
`
            }
        };
    }
};
</script>

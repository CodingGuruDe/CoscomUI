<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the <i>Coscom UI</i> instance imported from <i>@coscom/coscom-ui/config</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import CoscomUI from '@coscom/coscom-ui/config';
const app = createApp(App);

app.use(CoscomUI, { /* options */ });
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Defines the shared pass through properties per component type. Visit the <NuxtLink to="/traverse">Traverse Props</NuxtLink> documentation for more information.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import CoscomUI from "@coscom/coscom-ui/config";
const app = createApp(App);

app.use(CoscomUI, {
    pt: {
        slider: {
            handle: { class: 'bg-primary' }
        }
    }
});
`
            }
        };
    }
};
</script>

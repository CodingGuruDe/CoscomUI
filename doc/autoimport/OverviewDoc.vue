<template>
    <DocSectionText v-bind="$attrs">
        <p>CoscomUI components need to be imported and configured individually. In the next section, we'll cleanup the code using auto imports.</p>
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
import InputText from '@coscom/coscom-ui/inputtext';
import Button from '@coscom/coscom-ui/button';
import App from './App.vue'
const app = createApp(App);

app.use(CoscomUI);
app.component('InputText', InputText);
app.component('Button', Button);
`
            }
        };
    }
};
</script>

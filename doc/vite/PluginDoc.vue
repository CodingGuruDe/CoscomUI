<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Coscom UI plugin is required to be installed as an application plugin to set up the default <NuxtLink to="/configuration">configuration</NuxtLink>. The plugin is lightweight, only sets up the configuration object without affecting your
            application.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue';
import CoscomUI from '@coscom/coscom-ui/config';

const app = createApp(App);
app.use(CoscomUI);
`
            }
        };
    }
};
</script>

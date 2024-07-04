<template>
    <DocSectionText v-bind="$attrs">
        <p>No tree-shaking. Bundle will have redundant codes. If you want to install globally but don't want all components, please see Import on Demand.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue'
import coscom-ui from '@coscom/coscom-ui'

const app = createApp(App)
app.use(coscom-ui)
<\/script>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button label="Check" icon="cs el-check" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Button label="Check" icon="cs el-check" />
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>

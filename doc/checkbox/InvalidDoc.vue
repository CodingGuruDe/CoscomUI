<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" invalid binary />
    </div>
    <DocSectionCode :code="code" hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<Checkbox v-model="checked" invalid binary />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" invalid binary />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" invalid binary />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>

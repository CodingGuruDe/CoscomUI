<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" disabled onIcon="cs el-check" offIcon="cs el-times" class="w-full sm:w-10rem" aria-label="Confirmation" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<ToggleButton v-model="checked" disabled onIcon="cs el-check" offIcon="cs el-times"
    class="w-full sm:w-10rem" aria-label="Confirmation" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" disabled onIcon="cs el-check" offIcon="cs el-times"
            class="w-full sm:w-10rem" aria-label="Confirmation" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" disabled onIcon="cs el-check" offIcon="cs el-times"
            class="w-full sm:w-10rem" aria-label="Confirmation" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>

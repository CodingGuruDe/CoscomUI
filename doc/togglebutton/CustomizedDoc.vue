<template>
    <DocSectionText v-bind="$attrs">
        <p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" onLabel="Locked" offLabel="Unlocked" onIcon="cs el-lock" offIcon="cs el-lock-open" class="w-9rem" aria-label="Do you confirm" />
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
<ToggleButton v-model="checked" onLabel="Locked" offLabel="Unlocked" onIcon="cs el-lock" 
    offIcon="cs el-lock-open" class="w-9rem" aria-label="Do you confirm" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" onLabel="Locked" offLabel="Unlocked" onIcon="cs el-lock" 
            offIcon="cs el-lock-open" class="w-9rem" aria-label="Do you confirm" />
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
        <ToggleButton v-model="checked" onLabel="Locked" offLabel="Unlocked" onIcon="cs el-lock" 
            offIcon="cs el-lock-open" class="w-9rem" aria-label="Do you confirm" />
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

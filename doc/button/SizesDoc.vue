<template>
    <DocSectionText v-bind="$attrs">
        <p>Button provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.</p>
    </DocSectionText>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <Button label="Small" icon="cs el-check" size="small" />
        <Button label="Normal" icon="cs el-check" />
        <Button label="Large" icon="cs el-check" size="large" />
    </div>
    <DocSectionCode :code="code" hideStackBlitz hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Small" icon="cs el-check" size="small" />
<Button label="Normal" icon="cs el-check" />
<Button label="Large" icon="cs el-check" size="large" />
`,
                options: `
<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <Button label="Small" icon="cs el-check" size="small" />
        <Button label="Normal" icon="cs el-check" />
        <Button label="Large" icon="cs el-check" size="large" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <Button label="Small" icon="cs el-check" size="small" />
        <Button label="Normal" icon="cs el-check" />
        <Button label="Large" icon="cs el-check" size="large" />
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

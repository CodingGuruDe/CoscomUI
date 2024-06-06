<template>
    <DocSectionText v-bind="$attrs">
        <p>A font icon next to the label can be displayed with the <i>icon</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="cs el-apple" />
        <Chip label="Facebook" icon="cs el-facebook" />
        <Chip label="Google" icon="cs el-google" />
        <Chip label="Microsoft" icon="cs el-microsoft" removable />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Chip label="Apple" icon="cs el-apple" />
<Chip label="Facebook" icon="cs el-facebook" />
<Chip label="Google" icon="cs el-google" />
<Chip label="Microsoft" icon="cs el-microsoft" removable />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="cs el-apple" />
        <Chip label="Facebook" icon="cs el-facebook" />
        <Chip label="Google" icon="cs el-google" />
        <Chip label="Microsoft" icon="cs el-microsoft" removable />
    </div>
</template>
<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="cs el-apple" />
        <Chip label="Facebook" icon="cs el-facebook" />
        <Chip label="Google" icon="cs el-google" />
        <Chip label="Microsoft" icon="cs el-microsoft" removable />
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

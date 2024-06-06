<template>
    <DocSectionText v-bind="$attrs">
        <p>A font icon next to the value can be displayed with the <i>icon</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Tag icon="cs el-user" value="Primary"></Tag>
        <Tag icon="cs el-search" severity="secondary" value="Secondary"></Tag>
        <Tag icon="cs el-check" severity="success" value="Success"></Tag>
        <Tag icon="cs el-info-circle" severity="info" value="Info"></Tag>
        <Tag icon="cs el-exclamation-triangle" severity="warning" value="Warning"></Tag>
        <Tag icon="cs el-times" severity="danger" value="Danger"></Tag>
        <Tag icon="cs el-cog" severity="contrast" value="Contrast"></Tag>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Tag icon="cs el-user" value="Primary"></Tag>
<Tag icon="cs el-search" severity="secondary" value="Secondary"></Tag>
<Tag icon="cs el-check" severity="success" value="Success"></Tag>
<Tag icon="cs el-info-circle" severity="info" value="Info"></Tag>
<Tag icon="cs el-exclamation-triangle" severity="warning" value="Warning"></Tag>
<Tag icon="cs el-times" severity="danger" value="Danger"></Tag>
<Tag icon="cs el-cog" severity="contrast" value="Contrast"></Tag>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Tag icon="cs el-user" value="Primary"></Tag>
        <Tag icon="cs el-search" severity="secondary" value="Secondary"></Tag>
        <Tag icon="cs el-check" severity="success" value="Success"></Tag>
        <Tag icon="cs el-info-circle" severity="info" value="Info"></Tag>
        <Tag icon="cs el-exclamation-triangle" severity="warning" value="Warning"></Tag>
        <Tag icon="cs el-times" severity="danger" value="Danger"></Tag>
        <Tag icon="cs el-cog" severity="contrast" value="Contrast"></Tag>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Tag icon="cs el-user" value="Primary"></Tag>
        <Tag icon="cs el-check" severity="success" value="Success"></Tag>
        <Tag icon="cs el-search" severity="secondary" value="Secondary"></Tag>
        <Tag icon="cs el-info-circle" severity="info" value="Info"></Tag>
        <Tag icon="cs el-exclamation-triangle" severity="warning" value="Warning"></Tag>
        <Tag icon="cs el-times" severity="danger" value="Danger"></Tag>
        <Tag icon="cs el-cog" severity="contrast" value="Contrast"></Tag>
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

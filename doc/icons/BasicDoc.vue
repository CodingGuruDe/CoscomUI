<template>
    <DocSectionText v-bind="$attrs">
        <p>CoscomIcons use the <i>cd el--&#123;icon&#125;</i> syntax such as <i>cs el-check</i>. A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>
    </DocSectionText>
    <div class="card flex justify-content-center gap-3">
        <i class="cs el-check"></i>
        <i class="cs el-times"></i>
        <span class="cs el-search"></span>
        <span class="cs el-user"></span>
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<i class="cs el-check"></i>
<i class="cs el-times"></i>
<span class="cs el-search"></span>
<span class="cs el-user"></span>
`
            }
        };
    }
};
</script>

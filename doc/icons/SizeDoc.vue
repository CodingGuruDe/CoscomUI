<template>
    <DocSectionText v-bind="$attrs">
        <p>Size of an icon is controlled with the font-size property of the element.</p>
    </DocSectionText>
    <div class="card flex justify-content-center align-items-center gap-3">
        <i class="cs el-check" style="font-size: 1rem"></i>
        <i class="cs el-times" style="font-size: 1.5rem"></i>
        <i class="cs el-search" style="font-size: 2rem"></i>
        <i class="cs el-user" style="font-size: 2.5rem"></i>
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<i class="cs el-check" style="font-size: 1rem"></i>
<i class="cs el-times" style="font-size: 1.5rem"></i>
<i class="cs el-search" style="font-size: 2rem"></i>
<i class="cs el-user" style="font-size: 2.5rem"></i>
`
            }
        };
    }
};
</script>

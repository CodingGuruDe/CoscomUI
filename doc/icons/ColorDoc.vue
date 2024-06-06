<template>
    <DocSectionText v-bind="$attrs">
        <p>Icon color is defined with the <i>color</i> property which is inherited from parent by default.</p>
    </DocSectionText>
    <div class="card flex justify-content-center align-items-center gap-3">
        <i class="cs el-check" style="color: slateblue"></i>
        <i class="cs el-times" style="color: green"></i>
        <i class="cs el-search" style="color: 'var(--primary-color)'"></i>
        <i class="cs el-user" style="color: #708090"></i>
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<i class="cs el-check" style="color: slateblue"></i>
<i class="cs el-times" style="color: green"></i>
<i class="cs el-search" style="color: 'var(--primary-color)'"></i>
<i class="cs el-user" style="color: #708090"></i>
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Special <i>el-spin</i> class applies infinite rotation to an icon.</p>
    </DocSectionText>
    <div class="card flex justify-content-center gap-3">
        <i class="cs el-spin el-spinner" style="font-size: 2rem"></i>
        <i class="cs el-spin el-cog" style="font-size: 2rem"></i>
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<i class="cs el-spin el-spinner" style="font-size: 2rem"></i>
<i class="cs el-spin el-cog" style="font-size: 2rem"></i>
`
            }
        };
    }
};
</script>

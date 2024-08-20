<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Tooltip Pass Through</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocApiTable from '@/components/doc/DocApiTable.vue';
import { getPTOption } from '@/components/doc/helpers/PTHelper.js';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'pt.doc.tooltip',
                    label: 'Tooltip PT Options',
                    component: DocApiTable,
                    data: getPTOption('Tooltip')
                }
            ]
        };
    }
};
</script>

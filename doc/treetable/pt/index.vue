<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>TreeTable Traverse</h1>
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
                    id: 'pt.doc.treetable',
                    label: 'TreeTable PT Options',
                    component: DocApiTable,
                    data: getPTOption('TreeTable')
                },
                {
                    id: 'pt.doc.column',
                    label: 'Column PT Options',
                    component: DocApiTable,
                    data: getPTOption('Column')
                }
            ]
        };
    }
};
</script>

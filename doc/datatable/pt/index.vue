<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>DataTable Traverse</h1>
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
                    id: 'pt.doc.datatable',
                    label: 'DataTable PT Options',
                    component: DocApiTable,
                    data: getPTOption('DataTable')
                },
                {
                    id: 'pt.doc.column',
                    label: 'Column PT Options',
                    component: DocApiTable,
                    data: getPTOption('Column')
                },
                {
                    id: 'pt.doc.columngroup',
                    label: 'ColumnGroup PT Options',
                    component: DocApiTable,
                    data: getPTOption('ColumnGroup')
                },
                {
                    id: 'pt.doc.row',
                    label: 'Row PT Options',
                    component: DocApiTable,
                    data: getPTOption('Row')
                }
            ]
        };
    }
};
</script>

<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Tab Traverse</h1>
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
                    id: 'pt.doc.tab',
                    label: 'Tab PT Options',
                    component: DocApiTable,
                    data: getPTOption('Tab')
                },
                {
                    id: 'pt.doc.tabpanel',
                    label: 'TabPanel PT Options',
                    component: DocApiTable,
                    data: getPTOption('TabPanel')
                }
            ]
        };
    }
};
</script>

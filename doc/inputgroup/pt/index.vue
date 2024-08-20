<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>InputGroup Pass Through</h1>
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
                    id: 'pt.doc.inputgroup',
                    label: 'InputGroup PT Options',
                    component: DocApiTable,
                    data: getPTOption('InputGroup')
                },
                {
                    id: 'pt.doc.inputgroupaddon',
                    label: 'InputGroupAddon PT Options',
                    component: DocApiTable,
                    data: getPTOption('InputGroupAddon')
                }
            ]
        };
    }
};
</script>

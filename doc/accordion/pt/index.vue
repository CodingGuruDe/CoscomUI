<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Accordion Traverse</h1>
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
                    id: 'pt.doc.accordion',
                    label: 'Accordion PT Options',
                    component: DocApiTable,
                    data: getPTOption('Accordion')
                },
                {
                    id: 'pt.doc.accordiontab',
                    label: 'AccordionTab PT Options',
                    component: DocApiTable,
                    data: getPTOption('AccordionTab')
                }
            ]
        };
    }
};
</script>

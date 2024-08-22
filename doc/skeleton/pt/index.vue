<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Skeleton Traverse</h1>
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
                    id: 'pt.doc.skeleton',
                    label: 'Skeleton PT Options',
                    component: DocApiTable,
                    data: getPTOption('Skeleton')
                }
            ]
        };
    }
};
</script>

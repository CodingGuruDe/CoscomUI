<template>
    <Head>
        <Title>Import - Coscom-UI</Title>
        <Meta name="description" content="Next-generation UI Component suite for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Import</h1>
                <DocSections :docs="docs" />
            </div>
        </div>
    </div>
</template>

<script>
import ImportOnDemandDoc from '@/doc/import/ImportOnDemandDoc.vue';
import ImportDoc from '@/doc/import/ImportDoc.vue';
import ConfigurationDoc from '@/doc/import/ConfigurationDoc.vue';
import SingleFileDoc from '@/doc/import/SingleFileDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import & Configuration',
                    component: ImportOnDemandDoc
                },
                {
                    id: 'import',
                    label: 'Import on Demand (Tree Shaking)',
                    component: ImportDoc
                },
                {
                    id: 'config',
                    label: 'Import all in main file',
                    component: ConfigurationDoc
                },
                {
                    id: 'usage',
                    label: 'Usage SFC',
                    component: SingleFileDoc
                }
            ]
        };
    }
};
</script>

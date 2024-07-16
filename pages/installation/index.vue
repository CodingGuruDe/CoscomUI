<template>
    <Head>
        <Title>Installation</Title>
        <Meta name="description" content="Please note that coscom-ui only supports Vue3. If you are using Vue2, you may look at other libraries." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Install library to existing project</h1>
                <p>Please note that coscom-ui only supports Vue3. If you are using Vue2, you may look at other libraries.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DownloadDoc from '@/doc/installation/DownloadDoc.vue';
import ImportDoc from '@/doc/installation/ImportDoc.vue';
import ConfigurationDoc from '@/doc/installation/ConfigurationDoc.vue';
import SingleFileDoc from '@/doc/installation/SingleFileDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'download',
                    label: 'Installation',
                    component: DownloadDoc
                },
                {
                    id: 'import',
                    label: 'Import config file & Components',
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

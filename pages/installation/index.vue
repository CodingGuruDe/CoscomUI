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
import DownloadDoc from '@/doc/vite/DownloadDoc.vue';
import ImportDoc from '@/doc/vite/ImportDoc.vue';
import InstallDoc from '@/doc/vite/InstallDoc.vue';
import PluginDoc from '@/doc/vite/PluginDoc.vue';
import UsageDoc from '@/doc/vite/UsageDoc.vue';

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
                    label: 'Usage SFC',
                    component: ImportDoc
                },
                {
                    id: 'install-globaly',
                    label: 'Install Globally (Not Recommended)',
                    component: InstallDoc
                },
                {
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
                }
            ]
        };
    }
};
</script>

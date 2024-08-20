<template>
    <Head>
        <Title>Installation</Title>
        <Meta name="description" content="Please note that coscom-ui only supports Vue3." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Install library to existing project</h1>
                <p>
                    Please note that coscom-ui only supports Vue3. We provide an advanced type safe theme system that is built with typescript. All you need is to provide a theme overrides object in JS. Then all the stuffs will be done by us. What's
                    more, no less/sass/css variables, no webpack loaders are required.
                </p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DownloadDoc from '@/doc/installation/DownloadDoc.vue';
import UsingUmdDoc from '@/doc/installation/UsingUmdDoc.vue';
import SupportedBrowsersDoc from '@/doc/installation/SupportedBrowsersDoc.vue';

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
                    id: 'umd',
                    label: 'Using UMD',
                    component: UsingUmdDoc
                },
                {
                    id: 'browser',
                    label: 'Supported Browsers',
                    component: SupportedBrowsersDoc
                }
            ]
        };
    }
};
</script>

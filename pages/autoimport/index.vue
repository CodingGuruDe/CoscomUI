<template>
    <Head>
        <Title>Auto Import - CoscomUI</Title>
        <Meta name="description" content="On-demand CoscomUI components with auto importing." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Auto Import</h1>
                <p>On-demand CoscomUI components with auto importing.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import OverviewDoc from '@/doc/autoimport/OverviewDoc.vue';
import UnpluginDoc from '@/doc/autoimport/UnpluginDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'overview',
                    label: 'Overview',
                    component: OverviewDoc
                },
                {
                    id: 'unplugin',
                    label: 'Unplugin',
                    component: UnpluginDoc
                }
            ]
        };
    }
};
</script>

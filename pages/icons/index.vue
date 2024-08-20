<template>
    <div>
        <Head>
            <Title>Vue Icon Library - CoscomUI</Title>
            <Meta name="description" content="CoscomIcons is the default icon library of CoscomUI with over 250 open source icons. CoscomIcons library is optional as CoscomUI components can use any icon with templating." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Icons</h1>
                    <p>
                        <a href="https://www.npmjs.com/package/@coscom/coscom-icons"> CoscomIcons </a>
                        is the default icon library of CoscomUI with over 250 open source icons. CoscomIcons library is optional as CoscomUI components can use any icon with templating.
                    </p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import BasicDoc from '@/doc/icons/BasicDoc.vue';
import ColorDoc from '@/doc/icons/ColorDoc.vue';
import ConstantsDoc from '@/doc/icons/ConstantsDoc.vue';
import DownloadDoc from '@/doc/icons/DownloadDoc.vue';
import ImportDoc from '@/doc/icons/ImportDoc.vue';
import ListDoc from '@/doc/icons/ListDoc.vue';
import SizeDoc from '@/doc/icons/SizeDoc.vue';
import SpinDoc from '@/doc/icons/SpinDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'download',
                    label: 'Download',
                    component: DownloadDoc
                },
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'size',
                    label: 'Size',
                    component: SizeDoc
                },
                {
                    id: 'color',
                    label: 'Color',
                    component: ColorDoc
                },
                {
                    id: 'spin',
                    label: 'Spin',
                    component: SpinDoc
                },
                {
                    id: 'constants',
                    label: 'Constants',
                    component: ConstantsDoc
                },
                {
                    id: 'list',
                    label: 'List',
                    component: ListDoc
                }
            ]
        };
    }
};
</script>

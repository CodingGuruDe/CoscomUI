<template>
    <div>
        <Head>
            <Title>Color System - CoscomUI</Title>
            <Meta name="description" content="Each CoscomUI theme exports its own color palette." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Color System</h1>
                    <p>Each CoscomUI theme exports its own color palette.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import OverviewDoc from '@/doc/colors/OverviewDoc.vue';
import PaletteDoc from '@/doc/colors/PaletteDoc.vue';
import SurfacesDoc from '@/doc/colors/SurfacesDoc.vue';

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
                    id: 'surfaces',
                    label: 'Surfaces',
                    component: SurfacesDoc
                },
                {
                    id: 'palette',
                    label: 'Palette',
                    component: PaletteDoc
                }
            ]
        };
    }
};
</script>

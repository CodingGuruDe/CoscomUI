<template>
    <Head>
        <Title>CoscomUI - Traverse</Title>
        <Meta name="description" content="The Traverse props is an API to access the internal DOM Structure of the components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Traverse</h1>
                <p>The Traverse props is an API to access the internal DOM Structure of the components.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import BasicDoc from '@/doc/traverse/BasicDoc.vue';
import CustomCSSDoc from '@/doc/traverse/CustomCSSDoc.vue';
import DeclarativeDoc from '@/doc/traverse/DeclarativeDoc.vue';
import GlobalDoc from '@/doc/traverse/GlobalDoc.vue';
import LifecycleDoc from '@/doc/traverse/LifecycleDoc.vue';
import UseTraverseDoc from '@/doc/traverse/UseTraverseDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'declarative',
                    label: 'Declarative',
                    component: DeclarativeDoc
                },
                {
                    id: 'lifecycle',
                    label: 'Lifecycle',
                    component: LifecycleDoc
                },
                {
                    id: 'global',
                    label: 'Global',
                    component: GlobalDoc
                },
                {
                    id: 'customcss',
                    label: 'Custom CSS',
                    component: CustomCSSDoc
                },
                {
                    id: 'usepassthrough',
                    label: 'UseTraverse',
                    component: UseTraverseDoc
                }
            ]
        };
    }
};
</script>

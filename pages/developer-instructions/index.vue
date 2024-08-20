<template>
    <Head>
        <Title>Introduction - Coscom-UI</Title>
        <Meta name="description" content="Next-generation UI Component suite for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Naming Convention</h1>
                <DocSections :docs="docs" />
            </div>
        </div>
    </div>
</template>

<script>
import EnglishOnlyDoc from '@/doc/developer-instructions/EnglishOnlyDoc.vue';
import TextNotationDoc from '@/doc/developer-instructions/TextNotationDoc.vue';
import ReadmeSetupDoc from '@/doc/developer-instructions/ReadmeSetupDoc.vue';
import FinalWordDoc from '@/doc/developer-instructions/FinalWordDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'english',
                    label: 'English Only Rule',
                    component: EnglishOnlyDoc
                },
                {
                    id: 'notation',
                    label: 'Using proper notation?',
                    component: TextNotationDoc
                },
                {
                    id: 'readme',
                    label: 'Follow README instructions',
                    component: ReadmeSetupDoc
                },
                {
                    id: 'conclusion',
                    label: 'Final word',
                    component: FinalWordDoc
                }
            ]
        };
    }
};
</script>

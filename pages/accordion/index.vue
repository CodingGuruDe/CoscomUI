<template>
    <DocComponent
        title="Vue Accordion Component"
        header="Accordion"
        description="The accordion component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one accordion-panel body at a time; however, with the multiple property, the accordion-panel can remain open until explicitly closed."
        :componentDocs="docs"
        :apiDocs="['Accordion', 'AccordionTab']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/accordion/AccessibilityDoc.vue';
import BasicDoc from '@/doc/accordion/BasicDoc.vue';
import ControlledDoc from '@/doc/accordion/ControlledDoc.vue';
import Disabled from '@/doc/accordion/DisabledDoc.vue';
import DynamicDoc from '@/doc/accordion/DynamicDoc.vue';
import ImportDoc from '@/doc/accordion/ImportDoc.vue';
import MultipleDoc from '@/doc/accordion/MultipleDoc.vue';
import TemplateDoc from '@/doc/accordion/TemplateDoc.vue';
import PTComponent from '@/doc/accordion/pt/index.vue';
import ThemingDoc from '@/doc/accordion/theming/index.vue';

export default {
    data() {
        return {
            docs: [
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
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: Disabled
                },
                {
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>

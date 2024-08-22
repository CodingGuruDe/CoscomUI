<template>
    <DocComponent
        title="Vue Checkbox Component"
        header="Checkbox"
        description="The Checkbox component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists."
        :componentDocs="docs"
        :apiDocs="['Checkbox']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/checkbox/AccessibilityDoc.vue';
import BasicDoc from '@/doc/checkbox/BasicDoc.vue';
import DisabledDoc from '@/doc/checkbox/DisabledDoc.vue';
import DynamicDoc from '@/doc/checkbox/DynamicDoc.vue';
import FilledDoc from '@/doc/checkbox/FilledDoc.vue';
import GroupDoc from '@/doc/checkbox/GroupDoc.vue';
import ImportDoc from '@/doc/checkbox/ImportDoc.vue';
import InvalidDoc from '@/doc/checkbox/InvalidDoc.vue';
import PTComponent from '@/doc/checkbox/pt/index.vue';
import ThemingDoc from '@/doc/checkbox/theming/index.vue';

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
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
                },
                {
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
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

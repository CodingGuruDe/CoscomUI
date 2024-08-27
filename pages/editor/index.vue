<template>
    <DocComponent
        title="Vue Editor Component"
        header="Editor"
        description="The Editor component is a WYSIWYG (“what you see is what you get”) editor component that enables the user to write and even paste HTML. It uses the so-called Design Mode and the cross-browser contentEditable interface. The Editor is based on Quill."
        :componentDocs="docs"
        :apiDocs="['Editor']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/editor/AccessibilityDoc.vue';
import BasicDoc from '@/doc/editor/BasicDoc.vue';
import ImportDoc from '@/doc/editor/ImportDoc.vue';
import QuillDoc from '@/doc/editor/QuillDoc.vue';
import ReadOnlyDoc from '@/doc/editor/ReadOnlyDoc.vue';
import TemplateDoc from '@/doc/editor/TemplateDoc.vue';
import PTComponent from '@/doc/editor/pt/index.vue';
import ThemingDoc from '@/doc/editor/theming/index.vue';

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
                    id: 'quill',
                    label: 'Quill',
                    component: QuillDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'readonly',
                    label: 'ReadOnly',
                    component: ReadOnlyDoc
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

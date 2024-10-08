<template>
    <DocComponent
        title="Vue Button Component"
        header="Button"
        description="The Button component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color."
        :componentDocs="docs"
        :apiDocs="['Button', 'ButtonGroup']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/button/AccessibilityDoc.vue';
import BadgesDoc from '@/doc/button/BadgesDoc.vue';
import BasicDoc from '@/doc/button/BasicDoc.vue';
import ButtonGroupDoc from '@/doc/button/ButtonGroupDoc.vue';
import DisabledDoc from '@/doc/button/DisabledDoc.vue';
import IconOnlyDoc from '@/doc/button/IconOnlyDoc.vue';
import IconsDoc from '@/doc/button/IconsDoc.vue';
import ImportDoc from '@/doc/button/ImportDoc.vue';
import LinkDoc from '@/doc/button/LinkDoc.vue';
import LoadingDoc from '@/doc/button/LoadingDoc.vue';
import OutlinedDoc from '@/doc/button/OutlinedDoc.vue';
import RaisedDoc from '@/doc/button/RaisedDoc.vue';
import RaisedTextDoc from '@/doc/button/RaisedTextDoc.vue';
import RoundedDoc from '@/doc/button/RoundedDoc.vue';
import TypeDoc from '@/doc/button/TypeDoc.vue';
import TemplateDoc from '@/doc/button/TemplateDoc.vue';
import TextDoc from '@/doc/button/TextDoc.vue';
import PTComponent from '@/doc/button/pt/index.vue';
import ThemingDoc from '@/doc/button/theming/index.vue';

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
                    id: 'link',
                    label: 'Link',
                    component: LinkDoc
                },
                {
                    id: 'icons',
                    label: 'Icons',
                    component: IconsDoc
                },
                {
                    id: 'loading',
                    label: 'Loading',
                    component: LoadingDoc
                },
                {
                    id: 'type',
                    label: 'Type',
                    component: TypeDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'raised',
                    label: 'Raised',
                    component: RaisedDoc
                },
                {
                    id: 'rounded',
                    label: 'Rounded',
                    component: RoundedDoc
                },
                {
                    id: 'text',
                    label: 'Text',
                    component: TextDoc
                },
                {
                    id: 'raisedtext',
                    label: 'Raised Text',
                    component: RaisedTextDoc
                },
                {
                    id: 'outlined',
                    label: 'Outlined',
                    component: OutlinedDoc
                },
                {
                    id: 'icononly',
                    label: 'Icon Only',
                    component: IconOnlyDoc
                },
                {
                    id: 'badges',
                    label: 'Badges',
                    component: BadgesDoc
                },
                {
                    id: 'buttongroup',
                    label: 'Button Group',
                    component: ButtonGroupDoc
                } /*
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },*/,
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

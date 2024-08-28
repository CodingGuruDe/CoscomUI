<template>
    <DocComponent
        title="Vue Float Button Component"
        header="Float Button"
        description="When pressed, a floating action button can display multiple primary actions that can be performed on a page."
        :componentDocs="docs"
        :apiDocs="['FloatButton']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/floatbutton/AccessibilityDoc.vue';
import CircleDoc from '@/doc/floatbutton/CircleDoc.vue';
import CustomDoc from '@/doc/floatbutton/CustomDoc.vue';
import ImportDoc from '@/doc/floatbutton/ImportDoc.vue';
import LinearDoc from '@/doc/floatbutton/LinearDoc.vue';
import MaskDoc from '@/doc/floatbutton/MaskDoc.vue';
import QuarterCircleDoc from '@/doc/floatbutton/QuarterCircleDoc.vue';
import SemiCircleDoc from '@/doc/floatbutton/SemiCircleDoc.vue';
import TooltipDoc from '@/doc/floatbutton/TooltipDoc.vue';
import PTComponent from '@/doc/floatbutton/pt/index.vue';
import ThemingDoc from '@/doc/floatbutton/theming/index.vue';

export default {
    data() {
        return {
            docs: [
                { id: 'import', label: 'Import', component: ImportDoc },
                { id: 'linear', label: 'Linear', component: LinearDoc },
                { id: 'circle', label: 'Circle', component: CircleDoc },
                { id: 'semi-circle', label: 'Semi Circle', component: SemiCircleDoc },
                { id: 'quarter-circle', label: 'Quarter Circle', component: QuarterCircleDoc },
                { id: 'tooltip', label: 'Tooltip', component: TooltipDoc },
                { id: 'mask', label: 'Mask', component: MaskDoc },
                { id: 'custom', label: 'Custom', component: CustomDoc },
                { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>

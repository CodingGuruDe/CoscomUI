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
import GeneralRuleDoc from '@/doc/naming-convention/GeneralRuleDoc.vue';
import VariableDoc from '@/doc/naming-convention/VariableDoc.vue';
import BooleanDoc from '@/doc/naming-convention/BooleanDoc.vue';
import ClassDoc from '@/doc/naming-convention/ClassDoc.vue';
import ComponentDoc from '@/doc/naming-convention/ComponentDoc.vue';
import FunctionDoc from '@/doc/naming-convention/FunctionDoc.vue';
import MethodsDoc from '@/doc/naming-convention/MethodsDoc.vue';
import NamingConventionDoc from '@/doc/naming-convention/NamingConventionDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'rules',
                    label: 'General Rules',
                    component: GeneralRuleDoc
                },
                {
                    id: 'variable',
                    label: 'Javascript Naming Conventions: Variables',
                    component: VariableDoc
                },
                {
                    id: 'boolean',
                    label: 'Javascript Naming Conventions: Boolean',
                    component: BooleanDoc
                },
                {
                    id: 'function',
                    label: 'Javascript Naming Conventions: Functions',
                    component: FunctionDoc
                },
                {
                    id: 'class',
                    label: 'Javascript Naming Conventions: Classes',
                    component: ClassDoc
                },
                {
                    id: 'component',
                    label: 'Javascript Naming Conventions: Components',
                    component: ComponentDoc
                },
                {
                    id: 'method',
                    label: 'Javascript Naming Conventions: Methods',
                    component: MethodsDoc
                },
                {
                    id: 'naming',
                    label: 'Elevate your Coding Efficiency with proper Naming Conventions',
                    component: NamingConventionDoc
                }
            ]
        };
    }
};
</script>

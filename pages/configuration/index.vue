<template>
    <Head>
        <Title>Configuration - CoscomUI</Title>
        <Meta name="description" content="Global configuration options of the components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Configuration</h1>
                <p>Global configuration options of the components.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import ImportDoc from '@/doc/configuration/ImportDoc.vue';
import InputStyleDoc from '@/doc/configuration/InputStyleDoc.vue';
import PTDoc from '@/doc/configuration/PTDoc.vue';
import PTOptionsDoc from '@/doc/configuration/PTOptionsDoc.vue';
import RippleDoc from '@/doc/configuration/RippleDoc.vue';
import ZIndexDoc from '@/doc/configuration/ZIndexDoc.vue';
import LocaleApiDoc from '@/doc/configuration/locale/LocaleApiDoc.vue';
import SetLocaleDoc from '@/doc/configuration/locale/SetLocaleDoc.vue';

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
                    id: 'pt',
                    label: 'Traverse',
                    component: PTDoc
                },
                {
                    id: 'ptoptions',
                    label: 'Traverse Options',
                    component: PTOptionsDoc
                },
                {
                    id: 'ripple',
                    label: 'Ripple',
                    component: RippleDoc
                },
                {
                    id: 'inputstyle',
                    label: 'InputStyle',
                    component: InputStyleDoc
                },
                {
                    id: 'zindex',
                    label: 'ZIndex',
                    component: ZIndexDoc
                },
                {
                    id: 'locale',
                    label: 'Locale',
                    children: [
                        {
                            id: 'setlocale',
                            label: 'Set Locale',
                            component: SetLocaleDoc
                        },
                        {
                            id: 'localeapi',
                            label: 'API',
                            component: LocaleApiDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<template>
    <div>
        <Head>
            <Title>Theming - CoscomUI</Title>
            <Meta name="description" content="Choose from a variety of themes or develop your own theme easily." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Theming</h1>
                    <p>Choose from a variety of themes or develop your own theme easily.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import CSSModulesDoc from '@/doc/theming/CSSModulesDoc.vue';
import CustomThemeDoc from '@/doc/theming/CustomThemeDoc.vue';
import ScaleDoc from '@/doc/theming/ScaleDoc.vue';
import ScopedCSSDoc from '@/doc/theming/ScopedCSSDoc.vue';
import SwitchThemesDoc from '@/doc/theming/SwitchThemesDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'switchthemes',
                    label: 'Switch Themes',
                    component: SwitchThemesDoc
                },
                {
                    id: 'customtheme',
                    label: 'Custom Theme',
                    component: CustomThemeDoc
                },
                {
                    id: 'scopedcss',
                    label: 'Scoped CSS',
                    component: ScopedCSSDoc
                },
                {
                    id: 'cssmodules',
                    label: 'CSS Modules',
                    component: CSSModulesDoc
                },
                {
                    id: 'scale',
                    label: 'Scale',
                    component: ScaleDoc
                }
            ]
        };
    }
};
</script>

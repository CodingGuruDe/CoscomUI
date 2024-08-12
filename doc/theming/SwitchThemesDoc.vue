<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Themes can be dynamically changed using the <i>CoscomUI.changeTheme</i> function. For this feature to work, there are two prerequisites. To begin with, the themes should be publicly available under the <i>public</i> folder in your project
            by copying them from CoscomUI <i>resources/themes</i> folder. Second part is making the theme.css accessible via a link element so that the id of the link can be provided as the 3rd parameter to the <i>changeTheme</i> function.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
    <div class="doc-section-description">
        <p>In a Vite based project like <a href="https://github.com/vuejs/create-vue">create-vue</a>, the link can be placed at index.html.</p>
    </div>
    <DocSectionCode :code="code4" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
coscomui.changeTheme(currentTheme: string, newTheme: string, linkElementId: string, callback: Function)
`
            },
            code2: {
                basic: `
// Options API
this.$coscom.changeTheme('md-dark-indigo', 'md-light-indigo', 'theme-link', () => {});
`
            },
            code3: {
                basic: `
// Composition API
import { useCoscomUI } from '@coscom/coscom-ui/config';

const CoscomUI = useCoscomUI();
CoscomUI.changeTheme('md-dark-indigo', 'md-light-indigo', 'theme-link', () => {});
`
            },
            code4: {
                basic: `
<link id="theme-link" rel="stylesheet" href="/themes/aura-light-green/theme.css">
`
            }
        };
    }
};
</script>

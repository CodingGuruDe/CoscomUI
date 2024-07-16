<template>
    <DocSectionText v-bind="$attrs">
        <p>
            After the components are imported into the plugins index file, you need to import everything into the main file. In this case it is main.js. User component names should always be multi-word, except for root App components and built-in
            components provided by Vue, such as transition or components. This prevents conflicts with existing and future HTML elements, since all HTML elements are a single word. In order for the library to be fully functional and stylized, it is
            necessary to import two more files:
            <br />Theme and main styling file
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// main.js
import CoscomUI from '@coscom/coscom-ui/config';
import App from './App.vue';
import { Button, Calendar, Accordion, AccordionTab, Card, Divider, Dropdown, InputText } from '@/plugins';
import '@coscom/coscom-ui/resources/themes/skyblue-light/theme.css';
import '@coscom/coscom-ui/resources/main.css';

const app = createApp(App);

app.use(CoscomUI, {
    ripple: true
});

app.component('vButton', Button);
app.component('vCalendar', Calendar);
app.component('vAccordion', Accordion);
app.component('vAccordionTab', AccordionTab);
app.component('vCard', Card);
app.component('vDivider', Divider);
app.component('vDropdown', Dropdown);
app.component('vInputText', InputText);

app.mount('#app');
`
            }
        };
    }
};
</script>

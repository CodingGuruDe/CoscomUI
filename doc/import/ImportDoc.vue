<template>
    <DocSectionText v-bind="$attrs">
        <p>
            <b>Suggested way:</b> If the Plugins directory does not exist, it is necessary to create it first. In the index file, it is necessary to import the config file, as well as all the necessary components. The library works in such a way that
            we import only those components that we need, in order to reduce the bundle size.
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
// plugins/index.js
import Button from '@coscom/coscom-ui/button';
import Calendar from '@coscom/coscom-ui/calendar';
import Accordion from '@coscom/coscom-ui/accordion';
import AccordionTab from '@coscom/coscom-ui/accordiontab';
import Card from '@coscom/coscom-ui/card';
import Divider from '@coscom/coscom-ui/divider';
import Dropdown from '@coscom/coscom-ui/dropdown';
import InputText from '@coscom/coscom-ui/inputtext';

export { Button, Calendar, Accordion, AccordionTab, Card, Divider, Dropdown, InputText };
`
            }
        };
    }
};
</script>

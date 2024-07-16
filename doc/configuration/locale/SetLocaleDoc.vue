<template>
    <DocSectionText v-bind="$attrs">
        <p>Second parameter of the use function can be used to initiate the locale during CoscomUI installation.</p>

        <DocSectionCode :code="code1" importCode hideStackBlitz hideCodeSandbox />

        <p>The locale configuration is reactive so that any changes are instantly reflected in the UI. Suppose you are doing a multi language application and need to change the language dynamically.</p>

        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
app.use(CoscomUI, {
    locale: {
        accept: 'Annehmen',
        reject: 'Ablehnen',
        //...
    }
});
`
            },
            code2: {
                basic: `
import { defineComponent, onMounted } from "vue";
import { useCoscomUI } from "@coscom/coscom-ui/config";

export default defineComponent({
    setup() {
        const changeToGerman = () => {
            const coscomui = useCoscomUI();
            coscomui.config.locale.accept = "Annehmen";
            coscomui.config.locale.reject = "Ablehnen";
        }

        onMounted(() => {
            changeToGerman();
        })
    }
});
`
            }
        };
    }
};
</script>

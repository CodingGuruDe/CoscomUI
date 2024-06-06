<script>
import AccordionTabStyle from '@coscom/coscom-ui/accordiontab/style';
import BaseComponent from '@coscom/coscom-ui/basecomponent';

export default {
    name: 'BaseAccordionTab',
    extends: BaseComponent,
    props: {
        header: null,
        headerStyle: null,
        headerClass: null,
        headerProps: null,
        headerActionProps: null,
        contentStyle: null,
        contentClass: null,
        contentProps: null,
        disabled: Boolean
    },
    style: AccordionTabStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

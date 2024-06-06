<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import TabPanelStyle from '@coscom/coscom-ui/tabpanel/style';

export default {
    name: 'BaseTabPanel',
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
    style: TabPanelStyle
};
</script>

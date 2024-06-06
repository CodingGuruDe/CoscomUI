<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import PanelStyle from '@coscom/coscom-ui/panel/style';

export default {
    name: 'BasePanel',
    extends: BaseComponent,
    props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: PanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

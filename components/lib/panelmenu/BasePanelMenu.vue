<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import PanelMenuStyle from '@coscom/coscom-ui/panelmenu/style';

export default {
    name: 'BasePanelMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        expandedKeys: {
            type: Object,
            default: null
        },
        multiple: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        }
    },
    style: PanelMenuStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

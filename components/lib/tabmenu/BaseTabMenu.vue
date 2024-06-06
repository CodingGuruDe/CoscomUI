<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import TabMenuStyle from '@coscom/coscom-ui/tabmenu/style';

export default {
    name: 'BaseTabMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: TabMenuStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import DividerStyle from '@coscom/coscom-ui/divider/style';

export default {
    name: 'BaseDivider',
    extends: BaseComponent,
    props: {
        align: {
            type: String,
            default: null
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'solid'
        }
    },
    style: DividerStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

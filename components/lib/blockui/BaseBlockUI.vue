<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import BlockUIStyle from '@coscom/coscom-ui/blockui/style';

export default {
    name: 'BaseBlockUI',
    extends: BaseComponent,
    props: {
        blocked: {
            type: Boolean,
            default: false
        },
        fullScreen: {
            type: Boolean,
            default: false
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        }
    },
    style: BlockUIStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

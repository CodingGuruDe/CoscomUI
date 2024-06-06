<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import SplitterPanelStyle from '@coscom/coscom-ui/splitterpanel/style';

export default {
    name: 'BaseSplitterPanel',
    extends: BaseComponent,
    props: {
        size: {
            type: Number,
            default: null
        },
        minSize: {
            type: Number,
            default: null
        }
    },
    style: SplitterPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

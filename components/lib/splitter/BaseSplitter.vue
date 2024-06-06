<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import SplitterStyle from '@coscom/coscom-ui/splitter/style';

export default {
    name: 'BaseSplitter',
    extends: BaseComponent,
    props: {
        layout: {
            type: String,
            default: 'horizontal'
        },
        gutterSize: {
            type: Number,
            default: 4
        },
        stateKey: {
            type: String,
            default: null
        },
        stateStorage: {
            type: String,
            default: 'session'
        },
        step: {
            type: Number,
            default: 5
        }
    },
    style: SplitterStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

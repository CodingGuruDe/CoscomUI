<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import ProgressBarStyle from '@coscom/coscom-ui/progressbar/style';

export default {
    name: 'BaseProgressBar',
    extends: BaseComponent,
    props: {
        value: {
            type: Number,
            default: null
        },
        mode: {
            type: String,
            default: 'determinate'
        },
        showValue: {
            type: Boolean,
            default: true
        }
    },
    style: ProgressBarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

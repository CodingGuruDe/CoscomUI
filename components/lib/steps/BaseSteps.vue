<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import StepsStyle from '@coscom/coscom-ui/steps/style';

export default {
    name: 'BaseSteps',
    extends: BaseComponent,
    props: {
        id: {
            type: String
        },
        model: {
            type: Array,
            default: null
        },
        readonly: {
            type: Boolean,
            default: true
        },
        activeStep: {
            type: Number,
            default: 0
        }
    },
    style: StepsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

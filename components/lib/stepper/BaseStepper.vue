<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import StepperStyle from '@coscom/coscom-ui/stepper/style';

export default {
    name: 'BaseStepper',
    extends: BaseComponent,
    props: {
        activeStep: {
            type: Number,
            default: 0
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        linear: {
            type: Boolean,
            default: false
        }
    },
    style: StepperStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

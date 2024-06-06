<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import StepperPanelStyle from '@coscom/coscom-ui/stepperpanel/style';

export default {
    name: 'BaseStepperPanel',
    extends: BaseComponent,
    props: {
        header: null
    },
    style: StepperPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

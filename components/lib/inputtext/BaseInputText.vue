<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import InputTextStyle from '@coscom/coscom-ui/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseComponent,
    props: {
        modelValue: null,
        size: {
            type: String,
            default: null
        },
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        }
    },
    style: InputTextStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

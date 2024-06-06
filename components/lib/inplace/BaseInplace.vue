<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import InplaceStyle from '@coscom/coscom-ui/inplace/style';

export default {
    name: 'BaseInplace',
    extends: BaseComponent,
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        displayProps: {
            type: null,
            default: null
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    style: InplaceStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import MessageStyle from '@coscom/coscom-ui/message/style';

export default {
    name: 'BaseMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: true
        },
        sticky: {
            type: Boolean,
            default: true
        },
        life: {
            type: Number,
            default: 3000
        },
        icon: {
            type: String,
            default: undefined
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    style: MessageStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import InlineMessageStyle from '@coscom/coscom-ui/inlinemessage/style';

export default {
    name: 'BaseInlineMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    style: InlineMessageStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

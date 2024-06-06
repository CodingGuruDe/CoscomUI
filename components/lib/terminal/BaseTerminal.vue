<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import TerminalStyle from '@coscom/coscom-ui/terminal/style';

export default {
    name: 'BaseTerminal',
    extends: BaseComponent,
    props: {
        welcomeMessage: {
            type: String,
            default: null
        },
        prompt: {
            type: String,
            default: null
        }
    },
    style: TerminalStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

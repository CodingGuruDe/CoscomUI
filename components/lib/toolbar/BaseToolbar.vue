<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import ToolbarStyle from '@coscom/coscom-ui/toolbar/style';

export default {
    name: 'BaseToolbar',
    extends: BaseComponent,
    props: {
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: ToolbarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

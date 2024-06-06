<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import ScrollPanelStyle from '@coscom/coscom-ui/scrollpanel/style';

export default {
    name: 'BaseScrollPanel',
    extends: BaseComponent,
    props: {
        step: {
            type: Number,
            default: 5
        }
    },
    style: ScrollPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

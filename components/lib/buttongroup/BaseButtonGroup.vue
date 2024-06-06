<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import ButtonGroupStyle from '@coscom/coscom-ui/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

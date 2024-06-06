<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import InputGroupStyle from '@coscom/coscom-ui/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

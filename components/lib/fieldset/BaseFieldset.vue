<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import FieldsetStyle from '@coscom/coscom-ui/fieldset/style';

export default {
    name: 'BaseFieldset',
    extends: BaseComponent,
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: FieldsetStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import IconFieldStyle from '@coscom/coscom-ui/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    props: {
        iconPosition: {
            type: String,
            default: 'right'
        }
    },
    style: IconFieldStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

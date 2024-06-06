<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import ColumnGroupStyle from '@coscom/coscom-ui/columngroup/style';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    style: ColumnGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

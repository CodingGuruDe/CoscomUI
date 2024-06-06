<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import ConfirmDialogStyle from '@coscom/coscom-ui/confirmdialog/style';

export default {
    name: 'BaseConfirmDialog',
    extends: BaseComponent,
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        },
        draggable: {
            type: Boolean,
            default: true
        }
    },
    style: ConfirmDialogStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

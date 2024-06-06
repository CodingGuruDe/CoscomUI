<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import ConfirmPopupStyle from '@coscom/coscom-ui/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

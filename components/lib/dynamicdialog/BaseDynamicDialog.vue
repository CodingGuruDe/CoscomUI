<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import DynamicDialogStyle from '@coscom/coscom-ui/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

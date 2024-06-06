<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import InputGroupAddonStyle from '@coscom/coscom-ui/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

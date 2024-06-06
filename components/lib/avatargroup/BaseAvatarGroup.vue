<script>
import AvatarGroupStyle from '@coscom/coscom-ui/avatargroup/style';
import BaseComponent from '@coscom/coscom-ui/basecomponent';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

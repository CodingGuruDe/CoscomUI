<script>
import AvatarStyle from '@coscom/coscom-ui/avatar/style';
import BaseComponent from '@coscom/coscom-ui/basecomponent';

export default {
    name: 'BaseAvatar',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: 'normal'
        },
        shape: {
            type: String,
            default: 'square'
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: AvatarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

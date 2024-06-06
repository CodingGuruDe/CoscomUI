<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import TagStyle from '@coscom/coscom-ui/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

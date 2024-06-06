<script>
import BadgeStyle from '@coscom/coscom-ui/badge/style';
import BaseComponent from '@coscom/coscom-ui/basecomponent';

export default {
    name: 'BaseBadge',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: null
        },
        severity: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        }
    },
    style: BadgeStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

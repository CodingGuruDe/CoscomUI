<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import BreadcrumbStyle from '@coscom/coscom-ui/breadcrumb/style';

export default {
    name: 'BaseBreadcrumb',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        }
    },
    style: BreadcrumbStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

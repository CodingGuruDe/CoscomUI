<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import InputIconStyle from '@coscom/coscom-ui/inputicon/style';

export default {
    name: 'BaseInputIcon',
    extends: BaseComponent,
    style: InputIconStyle,
    props: {
        class: null
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

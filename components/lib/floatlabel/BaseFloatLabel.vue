<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import FloatLabelStyle from '@coscom/coscom-ui/floatlabel/style';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {},
    style: FloatLabelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

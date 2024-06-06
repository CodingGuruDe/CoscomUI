<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import DataViewLayoutOptionsStyle from '@coscom/coscom-ui/dataviewlayoutoptions/style';

export default {
    name: 'BaseDataViewLayoutOptions',
    extends: BaseComponent,
    props: {
        modelValue: String
    },
    style: DataViewLayoutOptionsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

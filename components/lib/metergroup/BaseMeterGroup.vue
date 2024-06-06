<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import MeterGroupStyle from '@coscom/coscom-ui/metergroup/style';

export default {
    name: 'MeterGroup',
    extends: BaseComponent,
    props: {
        value: {
            type: Array,
            default: null
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        labelPosition: {
            type: String,
            default: 'end'
        },
        labelOrientation: {
            type: String,
            default: 'horizontal'
        }
    },
    style: MeterGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

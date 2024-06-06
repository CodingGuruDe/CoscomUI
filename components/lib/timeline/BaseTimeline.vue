<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import TimelineStyle from '@coscom/coscom-ui/timeline/style';

export default {
    name: 'BaseTimeline',
    extends: BaseComponent,
    props: {
        value: null,
        align: {
            mode: String,
            default: 'left'
        },
        layout: {
            mode: String,
            default: 'vertical'
        },
        dataKey: null
    },
    style: TimelineStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

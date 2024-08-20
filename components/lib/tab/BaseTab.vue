<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import TabStyle from '@coscom/coscom-ui/tab/style';

export default {
    name: 'BaseTab',
    extends: BaseComponent,
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        lazy: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        previousButtonProps: {
            type: null,
            default: null
        },
        nextButtonProps: {
            type: null,
            default: null
        },
        prevIcon: {
            type: String,
            default: undefined
        },
        nextIcon: {
            type: String,
            default: undefined
        }
    },
    style: TabStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

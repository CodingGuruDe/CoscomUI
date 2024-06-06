<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import TabViewStyle from '@coscom/coscom-ui/tabview/style';

export default {
    name: 'BaseTabView',
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
    style: TabViewStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

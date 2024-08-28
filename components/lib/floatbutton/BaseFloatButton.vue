<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import FloatButtonStyle from '@coscom/coscom-ui/floatbutton/style';

export default {
    name: 'BaseFloatButton',
    extends: BaseComponent,
    props: {
        model: null,
        visible: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: 'up'
        },
        transitionDelay: {
            type: Number,
            default: 30
        },
        type: {
            type: String,
            default: 'linear'
        },
        radius: {
            type: Number,
            default: 0
        },
        mask: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        hideOnClickOutside: {
            type: Boolean,
            default: true
        },
        buttonClass: null,
        maskStyle: null,
        maskClass: null,
        showIcon: {
            type: String,
            default: undefined
        },
        hideIcon: {
            type: String,
            default: undefined
        },
        rotateAnimation: {
            type: Boolean,
            default: true
        },
        tooltipOptions: null,
        style: null,
        class: null,
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: FloatButtonStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

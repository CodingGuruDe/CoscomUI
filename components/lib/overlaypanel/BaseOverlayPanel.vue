<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import OverlayPanelStyle from '@coscom/coscom-ui/overlaypanel/style';

export default {
    name: 'BaseOverlayPanel',
    extends: BaseComponent,
    props: {
        dismissable: {
            type: Boolean,
            default: true
        },
        showCloseIcon: {
            type: Boolean,
            default: false
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        breakpoints: {
            type: Object,
            default: null
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        closeOnEscape: {
            type: Boolean,
            default: true
        }
    },
    style: OverlayPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

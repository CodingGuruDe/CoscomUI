<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import QrCodeStyle from '@coscom/coscom-ui/qrcode/style';

export default {
    name: 'BaseRadioButton',
    extends: BaseComponent,
    props: {
        color: {
            type: String,
            default: '#000'
        },
        backgroundColor: {
            type: String,
            default: '#FFF'
        },
        iconSrc: String,
        iconSize: {
            type: Number,
            default: 40
        },
        iconBackgroundColor: {
            type: String,
            default: '#FFF'
        },
        iconBorderRadius: {
            type: Number,
            default: 4
        },
        size: {
            type: Number,
            default: 100
        },
        padding: {
            type: Number,
            default: 12
        },
        errorCorrectionLevel: {
            type: String,
            default: 'M'
        },
        type: {
            type: String,
            default: 'canvas'
        }
    },
    style: QrCodeStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

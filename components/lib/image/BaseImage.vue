<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import ImageStyle from '@coscom/coscom-ui/image/style';

export default {
    name: 'BaseImage',
    extends: BaseComponent,
    props: {
        preview: {
            type: Boolean,
            default: false
        },
        class: {
            type: null,
            default: null
        },
        style: {
            type: null,
            default: null
        },
        imageStyle: {
            type: null,
            default: null
        },
        imageClass: {
            type: null,
            default: null
        },
        previewButtonProps: {
            type: null,
            default: null
        },
        indicatorIcon: {
            type: String,
            default: undefined
        },
        zoomInDisabled: {
            type: Boolean,
            default: false
        },
        zoomOutDisabled: {
            type: Boolean,
            default: false
        }
    },
    style: ImageStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

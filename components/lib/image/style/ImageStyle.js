import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-image v-component',
        {
            'v-image-preview-container': props.preview
        }
    ],
    image: ({ props }) => props.image,
    button: 'v-image-preview-indicator',
    icon: 'v-image-preview-icon',
    mask: 'v-image-mask v-component-overlay v-component-overlay-enter',
    toolbar: 'v-image-toolbar',
    rotateRightButton: 'v-image-action v-link',
    rotateLeftButton: 'v-image-action v-link',
    zoomOutButton: ({ instance }) => [
        'v-image-action v-link',
        {
            'v-disabled': instance.isZoomOutDisabled
        }
    ],
    zoomInButton: ({ instance }) => [
        'v-image-action v-link',
        {
            'v-disabled': instance.isZoomInDisabled
        }
    ],
    closeButton: 'v-image-action v-link',
    preview: 'v-image-preview'
};

export default BaseStyle.extend({
    name: 'image',
    classes
});

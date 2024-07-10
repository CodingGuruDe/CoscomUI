import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => ['v-colorpicker v-component', { 'v-colorpicker-overlay': !props.inline }],
    input: ({ props }) => ['v-colorpicker-preview v-inputtext', { 'v-disabled': props.disabled }],
    panel: ({ instance, props }) => [
        'v-colorpicker-panel',
        {
            'v-colorpicker-overlay-panel': !props.inline,
            'v-disabled': props.disabled,
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    content: 'v-colorpicker-content',
    selector: 'v-colorpicker-color-selector',
    color: 'v-colorpicker-color',
    colorHandle: 'v-colorpicker-color-handle',
    hue: 'v-colorpicker-hue',
    hueHandle: 'v-colorpicker-hue-handle'
};

export default BaseStyle.extend({
    name: 'colorpicker',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-inputtextarea v-inputtext v-component',
        {
            'v-filled': instance.filled,
            'v-inputtextarea-resizable ': props.autoResize,
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ]
};

export default BaseStyle.extend({
    name: 'textarea',
    classes
});

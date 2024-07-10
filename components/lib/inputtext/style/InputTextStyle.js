import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-inputtext v-component',
        {
            'v-filled': instance.filled,
            'v-inputtext-sm': props.size === 'small',
            'v-inputtext-lg': props.size === 'large',
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputtext',
    classes
});

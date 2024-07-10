import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props, instance }) => [
        'v-inputmask v-inputtext v-component',
        {
            'v-filled': instance.filled,
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputmask',
    classes
});

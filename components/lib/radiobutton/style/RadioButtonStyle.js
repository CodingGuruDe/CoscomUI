import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-radiobutton v-component',
        {
            'v-highlight': instance.checked,
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    box: 'v-radiobutton-box',
    input: 'v-radiobutton-input',
    icon: 'v-radiobutton-icon'
};

export default BaseStyle.extend({
    name: 'radiobutton',
    classes
});

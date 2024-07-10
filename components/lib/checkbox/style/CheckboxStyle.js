import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-checkbox v-component',
        {
            'v-highlight': instance.checked,
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    box: 'v-checkbox-box',
    input: 'v-checkbox-input',
    icon: 'v-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'checkbox',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-togglebutton v-component',
        {
            'v-disabled': props.disabled,
            'v-highlight': instance.active,
            'v-invalid': props.invalid
        }
    ],
    input: 'v-togglebutton-input',
    box: ({ instance }) => [
        'v-button v-component',
        {
            'v-button-icon-only': instance.hasIcon && !instance.hasLabel
        }
    ],
    icon: ({ instance, props }) => [
        'v-button-icon',
        {
            'v-button-icon-left': props.iconPos === 'left' && instance.label,
            'v-button-icon-right': props.iconPos === 'right' && instance.label
        }
    ],
    label: 'v-button-label'
};

export default BaseStyle.extend({
    name: 'togglebutton',
    classes
});

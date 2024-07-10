import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-selectbutton v-button-group v-component',
        {
            'v-disabled': props.disabled,
            'v-invalid': props.invalid
        }
    ],
    button: ({ instance, option }) => [
        'v-button v-component',
        {
            'v-highlight': instance.isSelected(option),
            'v-disabled': instance.isOptionDisabled(option)
        }
    ],
    label: 'v-button-label'
};

export default BaseStyle.extend({
    name: 'selectbutton',
    classes
});

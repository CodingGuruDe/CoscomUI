import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'v-inputswitch v-component',
        {
            'v-highlight': instance.checked,
            'v-disabled': props.disabled,
            'v-invalid': props.invalid
        }
    ],
    input: 'v-inputswitch-input',
    slider: 'v-inputswitch-slider'
};

export default BaseStyle.extend({
    name: 'inputswitch',
    classes,
    inlineStyles
});

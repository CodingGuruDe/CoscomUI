import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-inputnumber v-component v-inputwrapper',
        {
            'v-inputwrapper-filled': instance.filled || props.allowEmpty === false,
            'v-inputwrapper-focus': instance.focused,
            'v-inputnumber-buttons-stacked': props.showButtons && props.buttonLayout === 'stacked',
            'v-inputnumber-buttons-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
            'v-inputnumber-buttons-vertical': props.showButtons && props.buttonLayout === 'vertical',
            'v-invalid': props.invalid
        }
    ],
    input: ({ props, instance }) => [
        'v-inputnumber-input',
        {
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    buttonGroup: 'v-inputnumber-button-group',
    incrementButton: ({ instance, props }) => [
        'v-inputnumber-button v-inputnumber-button-up',
        {
            'v-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
        }
    ],
    decrementButton: ({ instance, props }) => [
        'v-inputnumber-button v-inputnumber-button-down',
        {
            'v-disabled': props.showButtons && props.min !== null && instance.minBoundry()
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputnumber',
    classes
});

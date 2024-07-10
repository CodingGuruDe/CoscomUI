import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'v-password v-component v-inputwrapper',
        {
            'v-inputwrapper-filled': instance.filled,
            'v-inputwrapper-focus': instance.focused,
            'v-icon-field v-icon-field-right': props.toggleMask
        }
    ],
    input: ({ props }) => [
        'v-password-input',
        {
            'v-disabled': props.disabled
        }
    ],
    hideIcon: 'v-input-icon',
    showIcon: 'v-input-icon',
    panel: ({ instance }) => [
        'v-password-panel v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    meter: 'v-password-meter',
    meterLabel: ({ instance }) => `v-password-strength ${instance.meter ? instance.meter.strength : ''}`,
    info: 'v-password-info'
};

export default BaseStyle.extend({
    name: 'password',
    classes,
    inlineStyles
});

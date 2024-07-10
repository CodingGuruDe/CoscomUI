import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'v-treeselect v-component v-inputwrapper',
        {
            'v-treeselect-chip': props.display === 'chip',
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-focus': instance.focused,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled',
            'v-inputwrapper-filled': !instance.emptyValue,
            'v-inputwrapper-focus': instance.focused || instance.overlayVisible
        }
    ],
    labelContainer: 'v-treeselect-label-container',
    label: ({ instance, props }) => [
        'v-treeselect-label',
        {
            'v-placeholder': instance.label === props.placeholder,
            'v-treeselect-label-empty': !props.placeholder && instance.emptyValue
        }
    ],
    token: 'v-treeselect-token',
    tokenLabel: 'v-treeselect-token-label',
    trigger: 'v-treeselect-trigger',
    triggerIcon: 'v-treeselect-trigger-icon',
    panel: ({ props, instance }) => [
        'v-treeselect-panel v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    wrapper: 'v-treeselect-items-wrapper',
    emptyMessage: 'v-treeselect-empty-message'
};

export default BaseStyle.extend({
    name: 'treeselect',
    classes,
    inlineStyles
});

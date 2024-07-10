import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'v-cascadeselect v-component v-inputwrapper',
        {
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled',
            'v-focus': instance.focused,
            'v-inputwrapper-filled': props.modelValue,
            'v-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'v-overlay-open': instance.overlayVisible
        }
    ],
    label: ({ instance, props }) => [
        'v-cascadeselect-label v-inputtext',
        {
            'v-placeholder': instance.label === props.placeholder,
            'v-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'v-emptylabel' || instance.label.length === 0)
        }
    ],
    dropdownButton: 'v-cascadeselect-trigger',
    loadingIcon: 'v-cascadeselect-trigger-icon',
    dropdownIcon: 'v-cascadeselect-trigger-icon',
    panel: ({ props, instance }) => [
        'v-cascadeselect-panel v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    wrapper: 'v-cascadeselect-items-wrapper',
    list: 'v-cascadeselect-panel v-cascadeselect-items',
    item: ({ instance, processedOption }) => [
        'v-cascadeselect-item',
        {
            'v-cascadeselect-item-group': instance.isOptionGroup(processedOption),
            'v-cascadeselect-item-active v-highlight': instance.isOptionActive(processedOption),
            'v-focus': instance.isOptionFocused(processedOption),
            'v-disabled': instance.isOptionDisabled(processedOption)
        }
    ],
    content: 'v-cascadeselect-item-content',
    text: 'v-cascadeselect-item-text',
    groupIcon: 'v-cascadeselect-group-icon',
    sublist: 'v-cascadeselect-sublist'
};

export default BaseStyle.extend({
    name: 'cascadeselect',
    classes,
    inlineStyles
});

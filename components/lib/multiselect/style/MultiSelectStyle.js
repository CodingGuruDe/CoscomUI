import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'v-multiselect v-component v-inputwrapper',
        {
            'v-multiselect-chip': props.display === 'chip',
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled',
            'v-focus': instance.focused,
            'v-inputwrapper-filled': props.modelValue && props.modelValue.length,
            'v-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'v-overlay-open': instance.overlayVisible
        }
    ],
    labelContainer: 'v-multiselect-label-container',
    label: ({ instance, props }) => [
        'v-multiselect-label',
        {
            'v-placeholder': instance.label === props.placeholder,
            'v-multiselect-label-empty': !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
        }
    ],
    token: 'v-multiselect-token',
    tokenLabel: 'v-multiselect-token-label',
    removeTokenIcon: 'v-multiselect-token-icon',
    trigger: 'v-multiselect-trigger',
    loadingIcon: 'v-multiselect-trigger-icon',
    dropdownIcon: 'v-multiselect-trigger-icon',
    panel: ({ props, instance }) => [
        'v-multiselect-panel v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    header: 'v-multiselect-header',
    filterContainer: 'v-multiselect-filter-container',
    filterInput: ({ props, instance }) => [
        'v-multiselect-filter v-inputtext v-component',
        {
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    filterIcon: 'v-multiselect-filter-icon',
    closeButton: 'v-multiselect-close v-link',
    closeIcon: 'v-multiselect-close-icon',
    wrapper: 'v-multiselect-items-wrapper',
    list: 'v-multiselect-items v-component',
    itemGroup: 'v-multiselect-item-group',
    item: ({ instance, option, index, getItemOptions, props }) => [
        'v-multiselect-item',
        {
            'v-highlight': instance.isSelected(option) && props.highlightOnSelect,
            'v-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'v-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'v-multiselect-empty-message'
};

export default BaseStyle.extend({
    name: 'multiselect',
    classes,
    inlineStyles
});

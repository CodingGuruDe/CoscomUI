import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props, state }) => [
        'v-dropdown v-component v-inputwrapper',
        {
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled',
            'v-dropdown-clearable': props.showClear,
            'v-focus': state.focused,
            'v-inputwrapper-filled': instance.hasSelectedOption,
            'v-inputwrapper-focus': state.focused || state.overlayVisible,
            'v-overlay-open': state.overlayVisible
        }
    ],
    input: ({ instance, props }) => [
        'v-dropdown-label v-inputtext',
        {
            'v-placeholder': !props.editable && instance.label === props.placeholder,
            'v-dropdown-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'v-emptylabel' || instance.label?.length === 0)
        }
    ],
    clearIcon: 'v-dropdown-clear-icon',
    trigger: 'v-dropdown-trigger',
    loadingicon: 'v-dropdown-trigger-icon',
    dropdownIcon: 'v-dropdown-trigger-icon',
    panel: ({ props, instance }) => [
        'v-dropdown-panel v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    header: 'v-dropdown-header',
    filterContainer: 'v-dropdown-filter-container',
    filterInput: ({ props, instance }) => [
        'v-dropdown-filter v-inputtext v-component',
        {
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    filterIcon: 'v-dropdown-filter-icon',
    wrapper: 'v-dropdown-items-wrapper',
    list: 'v-dropdown-items',
    itemGroup: 'v-dropdown-item-group',
    itemGroupLabel: 'v-dropdown-item-group-label',
    item: ({ instance, props, state, option, focusedOption }) => [
        'v-dropdown-item',
        {
            'v-highlight': instance.isSelected(option) && props.highlightOnSelect,
            'v-focus': state.focusedOptionIndex === focusedOption,
            'v-disabled': instance.isOptionDisabled(option)
        }
    ],
    itemLabel: 'v-dropdown-item-label',
    checkIcon: 'v-dropdown-check-icon',
    blankIcon: 'v-dropdown-blank-icon',
    emptyMessage: 'v-dropdown-empty-message'
};

export default BaseStyle.extend({
    name: 'dropdown',
    classes
});

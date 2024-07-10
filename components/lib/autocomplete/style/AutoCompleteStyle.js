import BaseStyle from '@coscom/coscom-ui/base/style';
import { ObjectUtils } from '@coscom/coscom-ui/utils';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'v-autocomplete v-component v-inputwrapper',
        {
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-focus': instance.focused,
            'v-autocomplete-dd': props.dropdown,
            'v-autocomplete-multiple': props.multiple,
            'v-inputwrapper-filled': props.modelValue || ObjectUtils.isNotEmpty(instance.inputValue),
            'v-inputwrapper-focus': instance.focused,
            'v-overlay-open': instance.overlayVisible
        }
    ],
    input: ({ props, instance }) => [
        'v-autocomplete-input v-inputtext v-component',
        {
            'v-autocomplete-dd-input': props.dropdown,
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    container: ({ props, instance }) => [
        'v-autocomplete-multiple-container v-component v-inputtext',
        {
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    token: ({ instance, i }) => ['v-autocomplete-token', { 'v-focus': instance.focusedMultipleOptionIndex === i }],
    tokenLabel: 'v-autocomplete-token-label',
    removeTokenIcon: 'v-autocomplete-token-icon',
    inputToken: 'v-autocomplete-input-token',
    loadingIcon: 'v-autocomplete-loader',
    dropdownButton: 'v-autocomplete-dropdown',
    panel: ({ props, instance }) => [
        'v-autocomplete-panel v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    list: 'v-autocomplete-items',
    itemGroup: 'v-autocomplete-item-group',
    item: ({ instance, option, i, getItemOptions }) => [
        'v-autocomplete-item',
        {
            'v-highlight': instance.isSelected(option),
            'v-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
            'v-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'v-autocomplete-empty-message'
};

export default BaseStyle.extend({
    name: 'autocomplete',
    classes,
    inlineStyles
});

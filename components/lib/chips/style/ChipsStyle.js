import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-chips v-component v-inputwrapper',
        {
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-focus': instance.focused,
            'v-inputwrapper-filled': (props.modelValue && props.modelValue.length) || (instance.inputValue && instance.inputValue.length),
            'v-inputwrapper-focus': instance.focused
        }
    ],
    container: ({ props, instance }) => [
        'v-inputtext v-chips-multiple-container',
        {
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    token: ({ state, index }) => ['v-chips-token', { 'v-focus': state.focusedIndex === index }],
    label: 'v-chips-token-label',
    removeTokenIcon: 'v-chips-token-icon',
    inputToken: 'v-chips-input-token'
};

export default BaseStyle.extend({
    name: 'chips',
    classes
});

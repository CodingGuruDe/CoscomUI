import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-button v-component',
        {
            'v-button-icon-only': instance.hasIcon && !props.label && !props.badge,
            'v-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
            'v-disabled': instance.$attrs.disabled || instance.$attrs.disabled === '' || props.loading,
            'v-button-loading': props.loading,
            'v-button-loading-label-only': props.loading && !instance.hasIcon && props.label,
            'v-button-link': props.link,
            [`p-button-${props.severity}`]: props.severity,
            'v-button-raised': props.raised,
            'v-button-rounded': props.rounded,
            'v-button-text': props.text,
            'v-button-outlined': props.outlined,
            'v-button-sm': props.size === 'small',
            'v-button-lg': props.size === 'large',
            'v-button-plain': props.plain
        }
    ],
    loadingIcon: 'v-button-loading-icon pi-spin',
    icon: ({ props }) => [
        'v-button-icon',
        {
            'v-button-icon-left': props.iconPos === 'left' && props.label,
            'v-button-icon-right': props.iconPos === 'right' && props.label,
            'v-button-icon-top': props.iconPos === 'top' && props.label,
            'v-button-icon-bottom': props.iconPos === 'bottom' && props.label
        }
    ],
    label: 'v-button-label'
};

export default BaseStyle.extend({
    name: 'button',
    classes
});

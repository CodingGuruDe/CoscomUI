import BaseStyle from '@coscom/coscom-ui/base/style';

// Position
const inlineStyles = {
    root: ({ position }) => ({
        position: 'fixed',
        top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
        right: (position === 'top-right' || position === 'bottom-right') && '20px',
        bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
        left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    })
};

const classes = {
    root: ({ props, instance }) => [
        'v-toast v-component p-toast-' + props.position,
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    container: ({ props }) => [
        'v-toast-message',
        {
            'v-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
            'v-toast-message-warn': props.message.severity === 'warn',
            'v-toast-message-error': props.message.severity === 'error',
            'v-toast-message-success': props.message.severity === 'success',
            'v-toast-message-secondary': props.message.severity === 'secondary',
            'v-toast-message-contrast': props.message.severity === 'contrast'
        }
    ],
    content: 'v-toast-message-content',
    icon: ({ props }) => [
        'v-toast-message-icon',
        {
            [props.infoIcon]: props.message.severity === 'info',
            [props.warnIcon]: props.message.severity === 'warn',
            [props.errorIcon]: props.message.severity === 'error',
            [props.successIcon]: props.message.severity === 'success'
        }
    ],
    text: 'v-toast-message-text',
    summary: 'v-toast-summary',
    detail: 'v-toast-detail',
    closeButton: 'v-toast-icon-close v-link',
    closeIcon: 'v-toast-icon-close-icon'
};

export default BaseStyle.extend({
    name: 'toast',
    classes,
    inlineStyles
});

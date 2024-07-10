import BaseStyle from '@coscom/coscom-ui/base/style';

/* Position */
const inlineStyles = {
    mask: ({ position, modal }) => ({
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
        alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
        pointerEvents: modal ? 'auto' : 'none'
    }),
    root: {
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'auto'
    }
};

const classes = {
    mask: ({ props }) => {
        const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
        const pos = positions.find((item) => item === props.position);

        return [
            'v-dialog-mask',
            {
                'v-component-overlay v-component-overlay-enter': props.modal
            },
            pos ? `v-dialog-${pos}` : ''
        ];
    },
    root: ({ props, instance }) => [
        'v-dialog v-component',
        {
            'v-dialog-rtl': props.rtl,
            'v-dialog-maximized': props.maximizable && instance.maximized,
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    header: 'v-dialog-header',
    title: 'v-dialog-title',
    icons: 'v-dialog-header-icons',
    maximizableButton: 'v-dialog-header-icon v-dialog-header-maximize v-link',
    maximizableIcon: 'v-dialog-header-maximize-icon',
    closeButton: 'v-dialog-header-icon v-dialog-header-close v-link',
    closeButtonIcon: 'v-dialog-header-close-icon',
    content: 'v-dialog-content',
    footer: 'v-dialog-footer'
};

export default BaseStyle.extend({
    name: 'dialog',
    classes,
    inlineStyles
});

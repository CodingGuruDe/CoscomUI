import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    mask: ({ position }) => ({
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
        alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center'
    })
};

const classes = {
    mask: ({ instance, props }) => {
        const positions = ['left', 'right', 'top', 'bottom'];
        const pos = positions.find((item) => item === props.position);

        return [
            'v-sidebar-mask',
            {
                'v-component-overlay v-component-overlay-enter': props.modal,
                'v-sidebar-mask-scrollblocker': props.blockScroll,
                'v-sidebar-visible': instance.containerVisible,
                'v-sidebar-full': instance.fullScreen
            },
            pos ? `p-sidebar-${pos}` : ''
        ];
    },
    root: ({ instance }) => [
        'v-sidebar v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false,
            'v-sidebar-full': instance.fullScreen
        }
    ],
    header: 'v-sidebar-header',
    title: 'v-sidebar-header-content',
    closeButton: 'v-sidebar-close p-sidebar-icon v-link',
    closeIcon: 'v-sidebar-close-icon',
    content: 'v-sidebar-content'
};

export default BaseStyle.extend({
    name: 'sidebar',
    classes,
    inlineStyles
});

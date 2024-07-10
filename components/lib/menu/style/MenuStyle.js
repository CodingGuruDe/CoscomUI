import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-menu v-component',
        {
            'v-menu-overlay': props.popup,
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    start: 'v-menu-start',
    menu: 'v-menu-list p-reset',
    submenuHeader: 'v-submenu-header',
    separator: 'v-menuitem-separator',
    end: 'v-menu-end',
    menuitem: ({ instance }) => [
        'v-menuitem',
        {
            'v-focus': instance.id === instance.focusedOptionId,
            'v-disabled': instance.disabled()
        }
    ],
    content: 'v-menuitem-content',
    action: 'v-menuitem-link',
    icon: 'v-menuitem-icon',
    label: 'v-menuitem-text'
};

export default BaseStyle.extend({
    name: 'menu',
    classes
});

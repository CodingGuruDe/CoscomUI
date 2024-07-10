import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance }) => [
        'v-contextmenu v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    menu: 'v-contextmenu-root-list',
    menuitem: ({ instance, processedItem }) => [
        'v-menuitem',
        {
            'v-menuitem-active v-highlight': instance.isItemActive(processedItem),
            'v-focus': instance.isItemFocused(processedItem),
            'v-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    content: 'v-menuitem-content',
    action: 'v-menuitem-link',
    icon: 'v-menuitem-icon',
    label: 'v-menuitem-text',
    submenuIcon: 'v-submenu-icon',
    submenu: 'v-submenu-list',
    separator: 'v-menuitem-separator'
};

export default BaseStyle.extend({
    name: 'contextmenu',
    classes
});

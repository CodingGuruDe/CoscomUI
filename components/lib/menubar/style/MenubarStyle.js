import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
};

const classes = {
    root: ({ instance }) => [
        'v-menubar v-component',
        {
            'v-menubar-mobile': instance.queryMatches,
            'v-menubar-mobile-active': instance.mobileActive
        }
    ],
    start: 'v-menubar-start',
    button: 'v-menubar-button',
    menu: 'v-menubar-root-list',
    menuitem: ({ instance, processedItem }) => [
        'v-menuitem',
        {
            'v-menuitem-active p-highlight': instance.isItemActive(processedItem),
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
    separator: 'v-menuitem-separator',
    end: 'v-menubar-end'
};

export default BaseStyle.extend({
    name: 'menubar',
    classes,
    inlineStyles
});

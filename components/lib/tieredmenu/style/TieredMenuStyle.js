import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
};

const classes = {
    root: ({ instance, props }) => [
        'v-tieredmenu v-component',
        {
            'v-tieredmenu-overlay': props.popup,
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    start: 'v-tieredmenu-start',
    menu: 'v-tieredmenu-root-list',
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
    text: 'v-menuitem-text',
    submenuIcon: 'v-submenu-icon',
    submenu: 'v-submenu-list',
    separator: 'v-menuitem-separator',
    end: 'v-tieredmenu-end'
};

export default BaseStyle.extend({
    name: 'tieredmenu',
    classes,
    inlineStyles
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-panelmenu v-component',
    panel: 'v-panelmenu-panel',
    header: ({ instance, item }) => [
        'v-panelmenu-header',
        {
            'v-highlight': instance.isItemActive(item) && !!item.items,
            'v-disabled': instance.isItemDisabled(item)
        }
    ],
    headerContent: 'v-panelmenu-header-content',
    headerAction: 'v-panelmenu-header-action',
    headerIcon: 'v-menuitem-icon',
    headerLabel: 'v-menuitem-text',
    toggleableContent: 'v-toggleable-content',
    menuContent: 'v-panelmenu-content',
    menu: 'v-panelmenu-root-list',
    menuitem: ({ instance, processedItem }) => [
        'v-menuitem',
        {
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
    name: 'panelmenu',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
};

const classes = {
    root: ({ instance }) => [
        'v-megamenu v-component',
        {
            'v-megamenu-mobile': instance.queryMatches,
            'v-megamenu-mobile-active': instance.mobileActive,
            'v-megamenu-horizontal': instance.horizontal,
            'v-megamenu-vertical': instance.vertical
        }
    ],
    start: 'v-megamenu-start',
    menubutton: 'v-megamenu-button',
    menu: 'v-megamenu-root-list',
    submenuHeader: ({ instance, processedItem }) => [
        'v-megamenu-submenu-header v-submenu-header',
        {
            'v-disabled': instance.isItemDisabled(processedItem)
        }
    ],
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
    panel: 'v-megamenu-panel',
    grid: 'v-megamenu-grid',
    column: ({ instance, processedItem }) => {
        let length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
        let columnClass;

        if (instance.$parentInstance.queryMatches) columnClass = 'v-megamenu-col-12';
        else {
            switch (length) {
                case 2:
                    columnClass = 'v-megamenu-col-6';
                    break;

                case 3:
                    columnClass = 'v-megamenu-col-4';
                    break;

                case 4:
                    columnClass = 'v-megamenu-col-3';
                    break;

                case 6:
                    columnClass = 'v-megamenu-col-2';
                    break;

                default:
                    columnClass = 'v-megamenu-col-12';
                    break;
            }
        }

        return columnClass;
    },
    submenu: 'v-submenu-list v-megamenu-submenu',
    submenuLabel: 'v-menuitem-text',
    separator: 'v-menuitem-separator',
    end: 'v-megamenu-end'
};

export default BaseStyle.extend({
    name: 'megamenu',
    classes,
    inlineStyles
});

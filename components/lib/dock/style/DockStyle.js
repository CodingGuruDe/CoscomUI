import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-dock v-component',
        `p-dock-${props.position}`,
        {
            'v-dock-mobile': instance.queryMatches
        }
    ],
    container: 'v-dock-list-container',
    menu: 'v-dock-list',
    menuitem: ({ instance, processedItem, index, id }) => [
        'v-dock-item',
        {
            'v-focus': instance.isItemActive(id),
            'v-disabled': instance.disabled(processedItem),
            'v-dock-item-second-prev': instance.currentIndex - 2 === index,
            'v-dock-item-prev': instance.currentIndex - 1 === index,
            'v-dock-item-current': instance.currentIndex === index,
            'v-dock-item-next': instance.currentIndex + 1 === index,
            'v-dock-item-second-next': instance.currentIndex + 2 === index
        }
    ],
    content: 'v-menuitem-content',
    action: 'v-dock-link',
    icon: 'v-dock-icon'
};

export default BaseStyle.extend({
    name: 'dock',
    classes
});

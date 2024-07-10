import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    mask: ({ instance }) => [
        'v-galleria-mask v-component-overlay v-component-overlay-enter',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    root: ({ instance }) => {
        const thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass('v-galleria-thumbnails', instance.$attrs.thumbnailsPosition);
        const indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass('v-galleria-indicators', instance.$attrs.indicatorsPosition);

        return [
            'v-galleria v-component',
            {
                'v-galleria-fullscreen': instance.$attrs.fullScreen,
                'v-galleria-indicator-onitem': instance.$attrs.showIndicatorsOnItem,
                'v-galleria-item-nav-onhover': instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
            },
            thumbnailsPosClass,
            indicatorPosClass
        ];
    },
    closeButton: 'v-galleria-close v-link',
    closeIcon: 'v-galleria-close-icon',
    header: 'v-galleria-header',
    content: 'v-galleria-content',
    footer: 'v-galleria-footer',
    itemWrapper: 'v-galleria-item-wrapper',
    itemContainer: 'v-galleria-item-container',
    previousItemButton: ({ instance }) => [
        'v-galleria-item-prev v-galleria-item-nav v-link',
        {
            'v-disabled': instance.isNavBackwardDisabled()
        }
    ],
    previousItemIcon: 'v-galleria-item-prev-icon',
    item: 'v-galleria-item',
    nextItemButton: ({ instance }) => [
        'v-galleria-item-next v-galleria-item-nav v-link',
        {
            'v-disabled': instance.isNavForwardDisabled()
        }
    ],
    nextItemIcon: 'v-galleria-item-next-icon',
    caption: 'v-galleria-caption',
    indicators: 'v-galleria-indicators v-reset',
    indicator: ({ instance, index }) => [
        'v-galleria-indicator',
        {
            'v-highlight': instance.isIndicatorItemActive(index)
        }
    ],
    indicatorButton: 'v-link',
    thumbnailWrapper: 'v-galleria-thumbnail-wrapper',
    thumbnailContainer: 'v-galleria-thumbnail-container',
    previousThumbnailButton: ({ instance }) => [
        'v-galleria-thumbnail-prev v-link',
        {
            'v-disabled': instance.isNavBackwardDisabled()
        }
    ],
    previousThumbnailIcon: 'v-galleria-thumbnail-prev-icon',
    thumbnailItemsContainer: 'v-galleria-thumbnail-items-container',
    thumbnailItems: 'v-galleria-thumbnail-items',
    thumbnailItem: ({ instance, index, activeIndex }) => [
        'v-galleria-thumbnail-item',
        {
            'v-galleria-thumbnail-item-current': activeIndex === index,
            'v-galleria-thumbnail-item-active': instance.isItemActive(index),
            'v-galleria-thumbnail-item-start': instance.firstItemAciveIndex() === index,
            'v-galleria-thumbnail-item-end': instance.lastItemActiveIndex() === index
        }
    ],
    thumbnailItemContent: 'v-galleria-thumbnail-item-content',
    nextThumbnailButton: ({ instance }) => [
        'v-galleria-thumbnail-next v-link',
        {
            'v-disabled': instance.isNavForwardDisabled()
        }
    ],
    nextThumbnailIcon: 'v-galleria-thumbnail-next-icon'
};

export default BaseStyle.extend({
    name: 'galleria',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance }) => [
        'v-carousel v-component',
        {
            'v-carousel-vertical': instance.isVertical(),
            'v-carousel-horizontal': !instance.isVertical()
        }
    ],
    header: 'v-carousel-header',
    content: 'v-carousel-content',
    container: 'v-carousel-container',
    previousButton: ({ instance }) => [
        'v-carousel-prev v-link',
        {
            'v-disabled': instance.backwardIsDisabled
        }
    ],
    previousButtonIcon: 'v-carousel-next-icon',
    itemsContent: 'v-carousel-items-content',
    itemsContainer: 'v-carousel-items-container',
    itemCloned: ({ index, value, totalShiftedItems, d_numVisible }) => [
        'v-carousel-item v-carousel-item-cloned',
        {
            'v-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
            'v-carousel-item-start': index === 0,
            'v-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
        }
    ],
    item: ({ instance, index }) => [
        'v-carousel-item',
        {
            'v-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
            'v-carousel-item-start': instance.firstIndex() === index,
            'v-carousel-item-end': instance.lastIndex() === index
        }
    ],
    nextButton: ({ instance }) => [
        'v-carousel-next v-link',
        {
            'v-disabled': instance.forwardIsDisabled
        }
    ],
    nextButtonIcon: 'v-carousel-prev-icon',
    indicators: 'v-carousel-indicators v-reset',
    indicator: ({ instance, index }) => [
        'v-carousel-indicator',
        {
            'v-highlight': instance.d_page === index
        }
    ],
    indicatorButton: 'v-link',
    footer: 'v-carousel-footer'
};

export default BaseStyle.extend({
    name: 'carousel',
    classes
});

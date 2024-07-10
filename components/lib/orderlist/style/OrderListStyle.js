import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-orderlist v-component',
        {
            'v-orderlist-striped': props.stripedRows
        }
    ],
    controls: 'v-orderlist-controls',
    container: 'v-orderlist-list-container',
    header: 'v-orderlist-header',
    list: 'v-orderlist-list',
    item: ({ instance, item, id }) => [
        'v-orderlist-item',
        {
            'v-highlight': instance.isSelected(item),
            'v-focus': id === instance.focusedOptionId
        }
    ]
};

export default BaseStyle.extend({
    name: 'orderlist',
    classes
});

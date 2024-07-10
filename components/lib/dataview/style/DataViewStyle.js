import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-dataview v-component',
        {
            'v-dataview-list': props.layout === 'list',
            'v-dataview-grid': props.layout === 'grid'
        }
    ],
    header: 'v-dataview-header',
    paginator: ({ instance }) => (instance.paginatorTop ? 'v-paginator-top' : instance.paginatorBottom ? 'v-paginator-bottom' : ''),
    content: 'v-dataview-content',
    emptyMessage: 'v-dataview-emptymessage',
    footer: 'v-dataview-footer'
};

export default BaseStyle.extend({
    name: 'dataview',
    classes
});

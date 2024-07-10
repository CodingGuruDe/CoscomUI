import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-treetable v-component',
        {
            'v-treetable-hoverable-rows': props.rowHover || instance.rowSelectionMode,
            'v-treetable-auto-layout': props.autoLayout,
            'v-treetable-resizable': props.resizableColumns,
            'v-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'v-treetable-gridlines': props.showGridlines,
            'v-treetable-scrollable': props.scrollable,
            'v-treetable-scrollable-vertical': props.scrollable && props.scrollDirection === 'vertical',
            'v-treetable-scrollable-horizontal': props.scrollable && props.scrollDirection === 'horizontal',
            'v-treetable-scrollable-both': props.scrollable && props.scrollDirection === 'both',
            'v-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'v-treetable-responsive-scroll': props.responsiveLayout === 'scroll',
            'v-treetable-sm': props.size === 'small',
            'v-treetable-lg': props.size === 'large'
        }
    ],
    loadingWrapper: 'v-treetable-loading',
    loadingOverlay: 'v-treetable-loading-overlay v-component-overlay',
    loadingIcon: 'v-treetable-loading-icon',
    header: 'v-treetable-header',
    paginator: ({ instance }) => (instance.paginatorTop ? 'v-paginator-top' : instance.paginatorBottom ? 'v-paginator-bottom' : ''),
    wrapper: 'v-treetable-wrapper',
    thead: 'v-treetable-thead',
    //headercell
    headerCell: ({ instance, props, column }) =>
        column && instance.hasColumnFilter()
            ? [
                  'v-filter-column',
                  {
                      'v-frozen-column': instance.columnProp(column, 'frozen')
                  }
              ]
            : [
                  {
                      'v-sortable-column': instance.columnProp('sortable'),
                      'v-resizable-column': props.resizableColumns,
                      'v-highlight': instance.isColumnSorted(),
                      'v-frozen-column': instance.columnProp('frozen')
                  }
              ],
    columnResizer: 'v-column-resizer',
    headerTitle: 'v-column-title',
    sortIcon: 'v-sortable-column-icon',
    sortBadge: 'v-sortable-column-badge',
    tbody: 'v-treetable-tbody',
    //ttrow
    row: ({ instance }) => [
        {
            'v-highlight': instance.selected
        }
    ],
    //bodycell
    bodyCell: ({ instance }) => [
        {
            'v-frozen-column': instance.columnProp('frozen')
        }
    ],
    rowToggler: 'v-treetable-toggler v-link',
    rowTogglerIcon: 'v-tree-toggler-icon',
    rowCheckbox: ({ instance }) => [
        'v-treetable-checkbox',
        {
            'v-indeterminate': instance.partialChecked
        }
    ],
    //treetable
    emptyMessage: 'v-treetable-emptymessage',
    tfoot: 'v-treetable-tfoot',
    //footercell
    footerCell: ({ instance }) => [
        {
            'v-frozen-column': instance.columnProp('frozen')
        }
    ],
    //treetable
    footer: 'v-treetable-footer',
    resizeHelper: 'v-column-resizer-helper v-highlight'
};

export default BaseStyle.extend({
    name: 'treetable',
    classes
});

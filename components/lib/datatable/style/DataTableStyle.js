import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-datatable v-component',
        {
            'v-datatable-hoverable-rows': props.rowHover || props.selectionMode,
            'v-datatable-resizable': props.resizableColumns,
            'v-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'v-datatable-scrollable': props.scrollable,
            'v-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'v-datatable-responsive-stack': props.responsiveLayout === 'stack',
            'v-datatable-responsive-scroll': props.responsiveLayout === 'scroll',
            'v-datatable-striped': props.stripedRows,
            'v-datatable-gridlines': props.showGridlines,
            'v-datatable-grouped-header': instance.headerColumnGroup != null,
            'v-datatable-grouped-footer': instance.footerColumnGroup != null,
            'v-datatable-sm': props.size === 'small',
            'v-datatable-lg': props.size === 'large'
        }
    ],
    loadingOverlay: 'v-datatable-loading-overlay v-component-overlay',
    loadingIcon: 'v-datatable-loading-icon',
    header: 'v-datatable-header',
    paginator: ({ instance }) => (instance.paginatorTop ? 'v-paginator-top' : instance.paginatorBottom ? 'v-paginator-bottom' : ''),
    wrapper: 'v-datatable-wrapper',
    table: ({ props }) => [
        'v-datatable-table',
        {
            'v-datatable-scrollable-table': props.scrollable,
            'v-datatable-resizable-table': props.resizableColumns,
            'v-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
        }
    ],
    //tablehead
    thead: 'v-datatable-thead',
    // headercell
    headerCell: ({ instance, props, column }) =>
        column && !instance.columnProp(column, 'hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field'))
            ? [
                  'v-filter-column',
                  {
                      'v-frozen-column': instance.columnProp(column, 'frozen')
                  }
              ]
            : [
                  {
                      'v-sortable-column': instance.columnProp('sortable'),
                      'v-resizable-column': instance.resizableColumns,
                      'v-highlight': instance.isColumnSorted(),
                      'v-filter-column': props.filterColumn,
                      'v-frozen-column': instance.columnProp('frozen'),
                      'v-reorderable-column': props.reorderableColumns
                  }
              ],
    columnResizer: 'v-column-resizer',
    headerContent: 'v-column-header-content',
    headerTitle: 'v-column-title',
    sortIcon: 'v-sortable-column-icon',
    sortBadge: 'v-sortable-column-badge',
    // columnfilter
    columnFilter: ({ props }) => [
        'v-column-filter v-fluid',
        {
            'v-column-filter-row': props.display === 'row',
            'v-column-filter-menu': props.display === 'menu'
        }
    ],
    filterInput: 'v-fluid v-column-filter-element',
    filterMenuButton: ({ instance }) => [
        'v-column-filter-menu-button v-link',
        {
            'v-column-filter-menu-button-open': instance.overlayVisible,
            'v-column-filter-menu-button-active': instance.hasFilter()
        }
    ],
    headerFilterClearButton: ({ instance }) => [
        'v-column-filter-clear-button v-link',
        {
            'v-hidden-space': !instance.hasRowFilter()
        }
    ],
    filterOverlay: ({ instance, props }) => [
        {
            'v-column-filter-overlay v-component v-fluid': true,
            'v-column-filter-overlay-menu': props.display === 'menu',
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    filterRowItems: 'v-column-filter-row-items',
    filterRowItem: ({ instance, matchMode }) => [
        'v-column-filter-row-item',
        {
            'v-highlight': matchMode && instance.isRowMatchModeSelected(matchMode.value)
        }
    ],
    filterSeparator: 'v-column-filter-separator',
    filterOperator: 'v-column-filter-operator',
    filterOperatorDropdown: 'v-column-filter-operator-dropdown',
    filterConstraints: 'v-column-filter-constraints',
    filterConstraint: 'v-column-filter-constraint',
    filterMatchModeDropdown: 'v-column-filter-matchmode-dropdown',
    filterRemoveButton: 'v-column-filter-remove-button v-button-text v-button-danger v-button-sm',
    filterAddRule: 'v-column-filter-add-rule',
    filterAddRuleButton: 'v-column-filter-add-button v-button-text v-button-sm',
    filterButtonbar: 'v-column-filter-buttonbar',
    filterClearButton: 'v-button-outlined v-button-sm',
    filterApplyButton: 'v-button-sm',
    //tablebody
    tbody: ({ props }) => (props.frozenRow ? 'v-datatable-tbody v-datatable-frozen-tbody' : 'v-datatable-tbody'),
    rowgroupHeader: 'v-rowgroup-header',
    rowGroupToggler: 'v-row-toggler v-link',
    rowGroupTogglerIcon: 'v-row-toggler-icon',
    row: ({ instance, props, index, columnSelectionMode }) => {
        let rowStyleClass = [];

        if (props.selectionMode) {
            rowStyleClass.push('v-selectable-row');
        }

        if (props.selection) {
            rowStyleClass.push({
                'v-highlight': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
            });
        }

        if (props.contextMenuSelection) {
            rowStyleClass.push({
                'v-highlight-contextmenu': instance.isSelectedWithContextMenu
            });
        }

        rowStyleClass.push(index % 2 === 0 ? 'v-row-even' : 'v-row-odd');

        return rowStyleClass;
    },
    rowExpansion: 'v-datatable-row-expansion',
    rowgroupFooter: 'v-rowgroup-footer',
    emptyMessage: 'v-datatable-emptymessage',
    //bodycell
    bodyCell: ({ instance }) => [
        {
            'v-selection-column': instance.columnProp('selectionMode') != null,
            'v-editable-column': instance.isEditable(),
            'v-cell-editing': instance.d_editing,
            'v-frozen-column': instance.columnProp('frozen')
        }
    ],
    columnTitle: 'v-column-title',
    rowReorderIcon: 'v-datatable-reorderablerow-handle',
    rowToggler: 'v-row-toggler v-link',
    rowTogglerIcon: 'v-row-toggler-icon',
    rowEditorInitButton: 'v-row-editor-init v-link',
    rowEditorInitIcon: 'v-row-editor-init-icon',
    rowEditorSaveButton: 'v-row-editor-save v-link',
    rowEditorSaveIcon: 'v-row-editor-save-icon',
    rowEditorCancelButton: 'v-row-editor-cancel v-link',
    rowEditorCancelIcon: 'v-row-editor-cancel-icon',
    //tablefooter
    tfoot: 'v-datatable-tfoot',
    //footercell
    footerCell: ({ instance }) => [
        {
            'v-frozen-column': instance.columnProp('frozen')
        }
    ],
    //datatable
    virtualScrollerSpacer: 'v-datatable-virtualscroller-spacer',
    footer: 'v-datatable-footer',
    resizeHelper: 'v-column-resizer-helper',
    reorderIndicatorUp: 'v-datatable-reorder-indicator-up',
    reorderIndicatorDown: 'v-datatable-reorder-indicator-down'
};

const inlineStyles = {
    wrapper: { overflow: 'auto' },
    thead: { position: 'sticky' },
    tfoot: { position: 'sticky' }
};

export default BaseStyle.extend({
    name: 'datatable',
    classes,
    inlineStyles
});

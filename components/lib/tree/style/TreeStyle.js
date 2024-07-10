import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-tree v-component',
        {
            'v-tree-selectable': props.selectionMode != null,
            'v-tree-loading': props.loading,
            'v-tree-flex-scrollable': props.scrollHeight === 'flex'
        }
    ],
    loadingOverlay: 'v-tree-loading-overlay v-component-overlay',
    loadingIcon: 'v-tree-loading-icon',
    filterContainer: 'v-tree-filter-container',
    input: 'v-tree-filter v-inputtext v-component',
    searchIcon: 'v-tree-filter-icon',
    wrapper: 'v-tree-wrapper',
    container: 'v-tree-container',
    node: ({ instance }) => ['v-treenode', { 'v-treenode-leaf': instance.leaf }],
    content: ({ instance }) => [
        'v-treenode-content',
        instance.node.styleClass,
        {
            'v-treenode-selectable': instance.selectable,
            'v-highlight': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected
        }
    ],
    toggler: 'v-tree-toggler v-link',
    togglerIcon: 'v-tree-toggler-icon',
    nodeTogglerIcon: 'v-tree-node-toggler-icon',
    nodeCheckbox: ({ instance }) => [
        {
            'v-indeterminate': instance.partialChecked
        }
    ],
    nodeIcon: 'v-treenode-icon',
    label: 'v-treenode-label',
    subgroup: 'v-treenode-children'
};

export default BaseStyle.extend({
    name: 'tree',
    classes
});

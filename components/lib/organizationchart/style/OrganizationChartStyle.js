import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-organizationchart v-component',
    table: 'v-organizationchart-table',
    node: ({ instance }) => ['v-organizationchart-node-content', { 'v-organizationchart-selectable-node': instance.selectable, 'v-highlight': instance.selected }],
    nodeToggler: 'v-node-toggler',
    nodeTogglerIcon: 'v-node-toggler-icon',
    lines: 'v-organizationchart-lines',
    lineDown: 'v-organizationchart-line-down',
    lineLeft: ({ index }) => ['v-organizationchart-line-left', { 'v-organizationchart-line-top': !(index === 0) }],
    lineRight: ({ props, index }) => ['v-organizationchart-line-right', { 'v-organizationchart-line-top': !(index === props.node.children.length - 1) }],
    nodes: 'v-organizationchart-nodes'
};

export default BaseStyle.extend({
    name: 'organizationchart',
    classes
});

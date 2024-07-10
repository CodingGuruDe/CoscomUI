import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => ['v-splitter v-component', 'v-splitter-' + props.layout],
    gutter: 'v-splitter-gutter',
    gutterHandler: 'v-splitter-gutter-handle'
};

const inlineStyles = {
    root: ({ props }) => [{ display: 'flex', 'flex-wrap': 'nowrap' }, props.layout === 'vertical' ? { 'flex-direction': 'column' } : '']
};

export default BaseStyle.extend({
    name: 'splitter',
    classes,
    inlineStyles
});

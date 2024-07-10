import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => ['v-inplace v-component', { 'v-inplace-closable': props.closable }],
    display: ({ props }) => ['v-inplace-display', { 'v-disabled': props.disabled }],
    content: 'v-inplace-content'
};

export default BaseStyle.extend({
    name: 'inplace',
    classes
});

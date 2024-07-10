import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance }) => ['v-splitter-panel', { 'v-splitter-panel-nested': instance.isNested }]
};

export default BaseStyle.extend({
    name: 'splitterpanel',
    classes
});

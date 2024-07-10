import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-toolbar v-component',
    start: 'v-toolbar-group-start p-toolbar-group-left',
    center: 'v-toolbar-group-center',
    end: 'v-toolbar-group-end p-toolbar-group-right'
};

export default BaseStyle.extend({
    name: 'toolbar',
    classes
});

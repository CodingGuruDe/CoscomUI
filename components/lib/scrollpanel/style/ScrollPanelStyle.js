import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-scrollpanel v-component',
    wrapper: 'v-scrollpanel-wrapper',
    content: 'v-scrollpanel-content',
    barx: 'v-scrollpanel-bar v-scrollpanel-bar-x',
    bary: 'v-scrollpanel-bar v-scrollpanel-bar-y'
};

export default BaseStyle.extend({
    name: 'scrollpanel',
    classes
});

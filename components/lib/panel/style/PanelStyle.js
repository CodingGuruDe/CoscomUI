import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-panel v-component',
        {
            'v-panel-toggleable': props.toggleable
        }
    ],
    header: 'v-panel-header',
    title: 'v-panel-title',
    icons: 'v-panel-icons',
    toggler: 'v-panel-header-icon p-panel-toggler v-link',
    toggleablecontent: 'v-toggleable-content',
    content: 'v-panel-content',
    footer: 'v-panel-footer'
};

export default BaseStyle.extend({
    name: 'panel',
    classes
});

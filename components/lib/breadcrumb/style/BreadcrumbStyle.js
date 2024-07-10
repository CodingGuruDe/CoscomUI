import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-breadcrumb v-component',
    menu: 'v-breadcrumb-list',
    home: 'v-breadcrumb-home',
    separator: 'v-menuitem-separator',
    menuitem: ({ instance }) => ['v-menuitem', { 'v-disabled': instance.disabled() }],
    action: 'v-menuitem-link',
    icon: 'v-menuitem-icon',
    label: 'v-menuitem-text'
};

export default BaseStyle.extend({
    name: 'breadcrumb',
    classes
});

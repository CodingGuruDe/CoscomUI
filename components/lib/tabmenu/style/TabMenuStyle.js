import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-tabmenu v-component',
    menu: 'v-tabmenu-nav p-reset',
    menuitem: ({ instance, index, item }) => [
        'v-tabmenuitem',
        {
            'v-highlight': instance.d_activeIndex === index,
            'v-disabled': instance.disabled(item)
        }
    ],
    action: 'v-menuitem-link',
    icon: 'v-menuitem-icon',
    label: 'v-menuitem-text',
    inkbar: 'v-tabmenu-ink-bar'
};

export default BaseStyle.extend({
    name: 'tabmenu',
    classes
});

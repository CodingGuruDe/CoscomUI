import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-tabview v-component',
        {
            'v-tabview-scrollable': props.scrollable
        }
    ],
    navContainer: 'v-tabview-nav-container',
    previousButton: 'v-tabview-nav-prev p-tabview-nav-btn v-link',
    navContent: 'v-tabview-nav-content',
    nav: 'v-tabview-nav',
    tab: {
        header: ({ instance, tab, index }) => [
            'v-tabview-header',
            instance.getTabProp(tab, 'headerClass'),
            {
                'v-highlight': instance.d_activeIndex === index,
                'v-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'v-tabview-nav-link p-tabview-header-action',
        headerTitle: 'v-tabview-title',
        content: ({ instance, tab }) => ['v-tabview-panel', instance.getTabProp(tab, 'contentClass')]
    },
    inkbar: 'v-tabview-ink-bar',
    nextButton: 'v-tabview-nav-next p-tabview-nav-btn v-link',
    panelContainer: 'v-tabview-panels'
};

export default BaseStyle.extend({
    name: 'tabview',
    classes
});

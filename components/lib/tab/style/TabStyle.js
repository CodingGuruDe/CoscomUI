import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-tab v-component',
        {
            'v-tab-scrollable': props.scrollable
        }
    ],
    navContainer: 'v-tab-nav-container',
    previousButton: 'v-tab-nav-prev v-tab-nav-btn v-link',
    navContent: 'v-tab-nav-content',
    nav: 'v-tab-nav',
    tab: {
        header: ({ instance, tab, index }) => [
            'v-tab-header',
            instance.getTabProp(tab, 'headerClass'),
            {
                'v-highlight': instance.d_activeIndex === index,
                'v-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'v-tab-nav-link v-tab-header-action',
        headerTitle: 'v-tab-title',
        content: ({ instance, tab }) => ['v-tab-panel', instance.getTabProp(tab, 'contentClass')]
    },
    inkbar: 'v-tab-ink-bar',
    nextButton: 'v-tab-nav-next v-tab-nav-btn v-link',
    panelContainer: 'v-tab-panels'
};

export default BaseStyle.extend({
    name: 'tab',
    classes
});

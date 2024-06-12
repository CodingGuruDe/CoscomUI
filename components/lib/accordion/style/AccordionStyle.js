import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-accordion v-component',
    tab: {
        root: ({ instance, index }) => [
            'v-accordion-tab',
            {
                'v-accordion-tab-active': instance.isTabActive(index)
            }
        ],
        header: ({ instance, tab, index }) => [
            'v-accordion-header',
            {
                'v-highlight': instance.isTabActive(index),
                'v-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'v-accordion-header-link v-accordion-header-action',
        headerIcon: 'v-accordion-toggle-icon',
        headerTitle: 'v-accordion-header-text',
        toggleableContent: 'v-toggleable-content',
        content: 'v-accordion-content'
    }
};

export default BaseStyle.extend({
    name: 'accordion',
    classes
});

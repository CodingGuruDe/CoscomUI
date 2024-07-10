import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    paginator: ({ instance, key }) => [
        'v-paginator v-component',
        {
            'v-paginator-default': !instance.hasBreakpoints(),
            [`v-paginator-${key}`]: instance.hasBreakpoints()
        }
    ],
    start: 'v-paginator-left-content',
    end: 'v-paginator-right-content',
    firstPageButton: ({ instance }) => [
        'v-paginator-first v-paginator-element v-link',
        {
            'v-disabled': instance.$attrs.disabled
        }
    ],
    firstPageIcon: 'v-paginator-icon',
    previousPageButton: ({ instance }) => [
        'v-paginator-prev v-paginator-element v-link',
        {
            'v-disabled': instance.$attrs.disabled
        }
    ],
    previousPageIcon: 'v-paginator-icon',
    nextPageButton: ({ instance }) => [
        'v-paginator-next v-paginator-element v-link',
        {
            'v-disabled': instance.$attrs.disabled
        }
    ],
    nextPageIcon: 'v-paginator-icon',
    lastPageButton: ({ instance }) => [
        'v-paginator-last v-paginator-element v-link',
        {
            'v-disabled': instance.$attrs.disabled
        }
    ],
    lastPageIcon: 'v-paginator-icon',
    pages: 'v-paginator-pages',
    pageButton: ({ props, pageLink }) => [
        'v-paginator-page v-paginator-element v-link',
        {
            'v-highlight': pageLink - 1 === props.page
        }
    ],
    current: 'v-paginator-current',
    rowPerPageDropdown: 'v-paginator-rpp-options',
    jumpToPageDropdown: 'v-paginator-page-options',
    jumpToPageInput: 'v-paginator-page-input'
};

export default BaseStyle.extend({
    name: 'paginator',
    classes
});

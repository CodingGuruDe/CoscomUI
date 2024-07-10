import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance }) => [
        'v-overlaypanel v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    content: 'v-overlaypanel-content',
    closeButton: 'v-overlaypanel-close v-link',
    closeIcon: 'v-overlaypanel-close-icon'
};

export default BaseStyle.extend({
    name: 'overlaypanel',
    classes
});

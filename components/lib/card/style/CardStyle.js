import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-card v-component',
    header: 'v-card-header',
    body: 'v-card-body',
    caption: 'v-card-caption',
    title: 'v-card-title',
    subtitle: 'v-card-subtitle',
    content: 'v-card-content',
    footer: 'v-card-footer'
};

export default BaseStyle.extend({
    name: 'card',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => 'v-message v-component v-message-' + props.severity,
    wrapper: 'v-message-wrapper',
    icon: 'v-message-icon',
    text: 'v-message-text',
    closeButton: 'v-message-close v-link',
    closeIcon: 'v-message-close-icon'
};

export default BaseStyle.extend({
    name: 'message',
    classes
});

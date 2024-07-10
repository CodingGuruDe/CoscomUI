import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props, instance }) => ['v-inline-message v-component v-inline-message-' + props.severity, { 'v-inline-message-icon-only': !instance.$slots.default }],
    icon: ({ props }) => ['v-inline-message-icon', props.icon],
    text: 'v-inline-message-text'
};

export default BaseStyle.extend({
    name: 'inlinemessage',
    classes
});

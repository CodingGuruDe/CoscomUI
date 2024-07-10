import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => ['v-scrolltop v-link v-component', { 'v-scrolltop-sticky': props.target !== 'window' }],
    icon: 'v-scrolltop-icon'
};

export default BaseStyle.extend({
    name: 'scrolltop',
    classes
});

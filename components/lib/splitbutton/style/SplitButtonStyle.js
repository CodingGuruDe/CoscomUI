import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-splitbutton v-component',
        {
            'v-button-raised': props.raised,
            'v-button-rounded': props.rounded,
            'v-button-text': props.text,
            'v-button-outlined': props.outlined,
            'v-button-sm': props.size === 'small',
            'v-button-lg': props.size === 'large'
        }
    ],
    button: 'v-splitbutton-defaultbutton',
    menuButton: 'v-splitbutton-menubutton'
};

export default BaseStyle.extend({
    name: 'splitbutton',
    classes
});

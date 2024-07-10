import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-icon-field',
        {
            'v-icon-field-right': props.iconPosition === 'right',
            'v-icon-field-left': props.iconPosition === 'left'
        }
    ]
};

export default BaseStyle.extend({
    name: 'iconfield',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-avatar v-component',
        {
            'v-avatar-image': props.image != null,
            'v-avatar-circle': props.shape === 'circle',
            'v-avatar-lg': props.size === 'large',
            'v-avatar-xl': props.size === 'xlarge'
        }
    ],
    label: 'v-avatar-text',
    icon: 'v-avatar-icon'
};

export default BaseStyle.extend({
    name: 'avatar',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-chip v-component',
        {
            'v-chip-image': props.image != null
        }
    ],
    icon: 'v-chip-icon',
    label: 'v-chip-text',
    removeIcon: 'v-chip-remove-icon'
};

export default BaseStyle.extend({
    name: 'chip',
    classes
});

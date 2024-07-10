import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => ['v-steps v-component', { 'v-readonly': props.readonly }],
    menu: 'v-steps-list',
    menuitem: ({ instance, item, index }) => [
        'v-steps-item',
        {
            'v-highlight v-steps-current': instance.isActive(index),
            'v-disabled': instance.isItemDisabled(item, index)
        }
    ],
    action: 'v-menuitem-link',
    step: 'v-steps-number',
    label: 'v-steps-title'
};

export default BaseStyle.extend({
    name: 'steps',
    classes
});

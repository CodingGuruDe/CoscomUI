import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-rating',
        {
            'v-readonly': props.readonly,
            'v-disabled': props.disabled
        }
    ],
    cancelItem: ({ instance }) => [
        'v-rating-item v-rating-cancel-item',
        {
            'v-focus': instance.focusedOptionIndex === 0 && instance.isFocusVisibleItem
        }
    ],
    cancelIcon: 'v-rating-icon v-rating-cancel',
    item: ({ instance, props, value }) => [
        'v-rating-item',
        {
            'v-rating-item-active': value <= props.modelValue,
            'v-focus': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
        }
    ],
    onIcon: 'v-rating-icon',
    offIcon: 'v-rating-icon'
};

export default BaseStyle.extend({
    name: 'rating',
    classes
});

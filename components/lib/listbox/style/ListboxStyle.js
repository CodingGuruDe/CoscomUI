import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-listbox v-component',
        {
            'v-disabled': props.disabled,
            'v-invalid': props.invalid
        }
    ],
    header: 'v-listbox-header',
    filterContainer: 'v-listbox-filter-container',
    filterInput: 'v-listbox-filter v-inputtext v-component',
    filterIcon: 'v-listbox-filter-icon',
    wrapper: 'v-listbox-list-wrapper',
    list: 'v-listbox-list',
    itemGroup: 'v-listbox-item-group',
    item: ({ instance, option, index, getItemOptions }) => [
        'v-listbox-item',
        {
            'v-highlight': instance.isSelected(option),
            'v-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'v-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'v-listbox-empty-message'
};

export default BaseStyle.extend({
    name: 'listbox',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-picklist v-component',
        {
            'v-picklist-striped': props.stripedRows
        }
    ],
    sourceControls: 'v-picklist-buttons v-picklist-source-controls',
    sourceWrapper: 'v-picklist-list-wrapper v-picklist-source-wrapper',
    sourceHeader: 'v-picklist-header',
    sourceList: 'v-picklist-list v-picklist-source-list',
    buttons: 'v-picklist-buttons v-picklist-transfer-buttons',
    targetWrapper: 'v-picklist-list-wrapper v-picklist-target-wrapper',
    targetHeader: 'v-picklist-header',
    targetList: 'v-picklist-list v-picklist-target',
    item: ({ instance, item, id, listIndex }) => [
        'v-picklist-item',
        {
            'v-highlight': instance.isSelected(item, listIndex),
            'v-focus': id === instance.focusedOptionId
        }
    ],
    targetControls: 'v-picklist-buttons v-picklist-target-controls'
};

export default BaseStyle.extend({
    name: 'picklist',
    classes
});

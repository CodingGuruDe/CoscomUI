import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'p-dataview-layout-options p-selectbutton p-button-group',
    listButton: ({ props }) => [
        'p-button p-button-icon-only',
        {
            'p-highlight': props.modelValue === 'list'
        }
    ],
    gridButton: ({ props }) => [
        'p-button p-button-icon-only',
        {
            'p-highlight': props.modelValue === 'grid'
        }
    ]
};

export default BaseStyle.extend({
    name: 'dataviewlayoutoptions',
    classes
});

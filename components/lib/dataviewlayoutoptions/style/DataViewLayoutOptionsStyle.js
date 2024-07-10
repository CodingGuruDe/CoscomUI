import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-dataview-layout-options p-selectbutton p-button-group',
    listButton: ({ props }) => [
        'v-button p-button-icon-only',
        {
            'v-highlight': props.modelValue === 'list'
        }
    ],
    gridButton: ({ props }) => [
        'v-button p-button-icon-only',
        {
            'v-highlight': props.modelValue === 'grid'
        }
    ]
};

export default BaseStyle.extend({
    name: 'dataviewlayoutoptions',
    classes
});

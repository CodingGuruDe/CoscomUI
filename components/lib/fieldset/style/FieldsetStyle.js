import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-fieldset v-component',
        {
            'v-fieldset-toggleable': props.toggleable
        }
    ],
    legend: 'v-fieldset-legend',
    legendtitle: 'v-fieldset-legend-text',
    togglericon: 'v-fieldset-toggler',
    toggleablecontent: 'v-toggleable-content',
    content: 'v-fieldset-content'
};

export default BaseStyle.extend({
    name: 'fieldset',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance }) => [
        'v-progressbar v-component',
        {
            'v-progressbar-determinate': instance.determinate,
            'v-progressbar-indeterminate': instance.indeterminate
        }
    ],
    container: 'v-progressbar-indeterminate-container',
    value: 'v-progressbar-value v-progressbar-value-animate',
    label: 'v-progressbar-label'
};

export default BaseStyle.extend({
    name: 'progressbar',
    classes
});

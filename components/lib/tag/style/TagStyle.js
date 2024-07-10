import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-tag v-component',
        {
            'v-tag-info': props.severity === 'info',
            'v-tag-success': props.severity === 'success',
            'v-tag-warning': props.severity === 'warning',
            'v-tag-danger': props.severity === 'danger',
            'v-tag-secondary': props.severity === 'secondary',
            'v-tag-contrast': props.severity === 'contrast',
            'v-tag-rounded': props.rounded
        }
    ],
    icon: 'v-tag-icon',
    value: 'v-tag-value'
};

export default BaseStyle.extend({
    name: 'tag',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';
import { ObjectUtils } from '@coscom/coscom-ui/utils';

const classes = {
    root: ({ props, instance }) => [
        'v-badge v-component',
        {
            'v-badge-no-gutter': ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
            'v-badge-dot': ObjectUtils.isEmpty(props.value) && !instance.$slots.default,
            'v-badge-lg': props.size === 'large',
            'v-badge-xl': props.size === 'xlarge',
            'v-badge-info': props.severity === 'info',
            'v-badge-success': props.severity === 'success',
            'v-badge-warning': props.severity === 'warning',
            'v-badge-danger': props.severity === 'danger',
            'v-badge-secondary': props.severity === 'secondary',
            'v-badge-contrast': props.severity === 'contrast'
        }
    ]
};

export default BaseStyle.extend({
    name: 'badge',
    classes
});

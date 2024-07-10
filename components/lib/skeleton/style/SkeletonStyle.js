import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ props }) => [
        'v-skeleton v-component',
        {
            'v-skeleton-circle': props.shape === 'circle',
            'v-skeleton-none': props.animation === 'none'
        }
    ]
};

export default BaseStyle.extend({
    name: 'skeleton',
    classes,
    inlineStyles
});

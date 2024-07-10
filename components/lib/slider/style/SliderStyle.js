import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    handle: { position: 'absolute' },
    range: { position: 'absolute' }
};

const classes = {
    root: ({ props }) => [
        'v-slider v-component',
        {
            'v-disabled': props.disabled,
            'v-slider-horizontal': props.orientation === 'horizontal',
            'v-slider-vertical': props.orientation === 'vertical'
        }
    ],
    range: 'v-slider-range',
    handle: 'v-slider-handle'
};

export default BaseStyle.extend({
    name: 'slider',
    classes,
    inlineStyles
});

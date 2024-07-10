import BaseStyle from '@coscom/coscom-ui/base/style';

/* Position */
const inlineStyles = {
    root: ({ props }) => ({
        justifyContent: props.layout === 'horizontal' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null) : null,
        alignItems: props.layout === 'vertical' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null) : null
    })
};

const classes = {
    root: ({ props }) => [
        'v-divider v-component',
        'v-divider-' + props.layout,
        'v-divider-' + props.type,
        { 'v-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left') },
        { 'v-divider-center': props.layout === 'horizontal' && props.align === 'center' },
        { 'v-divider-right': props.layout === 'horizontal' && props.align === 'right' },
        { 'v-divider-top': props.layout === 'vertical' && props.align === 'top' },
        { 'v-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center') },
        { 'v-divider-bottom': props.layout === 'vertical' && props.align === 'bottom' }
    ],
    content: 'v-divider-content'
};

export default BaseStyle.extend({
    name: 'divider',
    classes,
    inlineStyles
});

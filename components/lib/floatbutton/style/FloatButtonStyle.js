import BaseStyle from '@coscom/coscom-ui/base/style';

/* Direction */
const inlineStyles = {
    root: ({ props }) => ({
        alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
        justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
        flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    }),
    menu: ({ props }) => ({
        flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    })
};

const classes = {
    root: ({ instance, props }) => [
        `v-floatbutton v-component v-floatbutton-${props.type}`,
        {
            [`v-floatbutton-direction-${props.direction}`]: props.type !== 'circle',
            'v-floatbutton-opened': instance.d_visible,
            'v-disabled': props.disabled
        }
    ],
    button: ({ props }) => [
        'v-floatbutton-button v-button-rounded',
        {
            'v-floatbutton-rotate': props.rotateAnimation && !props.hideIcon
        }
    ],
    menu: 'v-floatbutton-list',
    menuitem: ({ instance, id }) => [
        'v-floatbutton-item',
        {
            'v-focus': instance.isItemActive(id)
        }
    ],
    action: ({ item }) => [
        'v-floatbutton-action',
        {
            'v-disabled': item.disabled
        }
    ],
    actionIcon: 'v-floatbutton-action-icon',
    mask: ({ instance }) => [
        'v-floatbutton-mask',
        {
            'v-floatbutton-mask-visible': instance.d_visible
        }
    ]
};

export default BaseStyle.extend({
    name: 'floatbutton',
    classes,
    inlineStyles
});

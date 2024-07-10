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
        `v-speeddial v-component v-speeddial-${props.type}`,
        {
            [`v-speeddial-direction-${props.direction}`]: props.type !== 'circle',
            'v-speeddial-opened': instance.d_visible,
            'v-disabled': props.disabled
        }
    ],
    button: ({ props }) => [
        'v-speeddial-button v-button-rounded',
        {
            'v-speeddial-rotate': props.rotateAnimation && !props.hideIcon
        }
    ],
    menu: 'v-speeddial-list',
    menuitem: ({ instance, id }) => [
        'v-speeddial-item',
        {
            'v-focus': instance.isItemActive(id)
        }
    ],
    action: ({ item }) => [
        'v-speeddial-action',
        {
            'v-disabled': item.disabled
        }
    ],
    actionIcon: 'v-speeddial-action-icon',
    mask: ({ instance }) => [
        'v-speeddial-mask',
        {
            'v-speeddial-mask-visible': instance.d_visible
        }
    ]
};

export default BaseStyle.extend({
    name: 'speeddial',
    classes,
    inlineStyles
});

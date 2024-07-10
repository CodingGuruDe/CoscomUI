import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-stepper v-component',
        {
            'v-stepper-horizontal': props.orientation === 'horizontal',
            'v-stepper-vertical': props.orientation === 'vertical',
            'v-readonly': props.linear
        }
    ],
    nav: 'v-stepper-nav',
    stepper: {
        header: ({ instance, step, index }) => [
            'v-stepper-header',
            {
                'v-highlight': instance.isStepActive(index),
                'v-disabled': instance.isItemDisabled(index)
            }
        ],
        action: 'v-stepper-action',
        number: 'v-stepper-number',
        title: 'v-stepper-title',
        separator: 'v-stepper-separator',
        toggleableContent: 'v-stepper-toggleable-content',
        content: ({ props }) => [
            'v-stepper-content',
            {
                'v-toggleable-content': props.orientation === 'vertical'
            }
        ]
    },
    panelContainer: 'v-stepper-panels',
    panel: ({ instance, props, index }) => [
        'v-stepper-panel',
        {
            'v-stepper-panel-active': props.orientation === 'vertical' && instance.isStepActive(index)
        }
    ]
};

export default BaseStyle.extend({
    name: 'stepper',
    classes
});

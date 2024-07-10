import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => ['v-knob v-component', { 'v-disabled': props.disabled }],
    range: 'v-knob-range',
    value: 'v-knob-value',
    label: 'v-knob-text'
};

export default BaseStyle.extend({
    name: 'knob',
    classes
});

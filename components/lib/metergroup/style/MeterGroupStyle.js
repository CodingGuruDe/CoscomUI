import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [
        'v-metergroup v-component',
        {
            'v-metergroup-horizontal': props.orientation === 'horizontal',
            'v-metergroup-vertical': props.orientation === 'vertical'
        }
    ],
    metercontainer: 'v-metergroup-meters',
    meter: 'v-metergroup-meter',
    labellist: ({ props }) => [
        'v-metergroup-labels',
        {
            'v-metergroup-labels-vertical': props.labelOrientation === 'vertical',
            'v-metergroup-labels-horizontal': props.labelOrientation === 'horizontal'
        }
    ],
    labellistitem: 'v-metergroup-label',
    labelicon: 'v-metergroup-label-icon',
    labellisttype: 'v-metergroup-label-marker',
    label: 'v-metergroup-label-text'
};

export default BaseStyle.extend({
    name: 'metergroup',
    classes
});

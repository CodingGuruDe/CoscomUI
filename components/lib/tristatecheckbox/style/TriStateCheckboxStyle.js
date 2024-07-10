import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => [
        'v-tristatecheckbox v-checkbox v-component',
        {
            'v-highlight': instance.active,
            'v-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-variant-filled': props.variant === 'filled' || instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    box: 'v-checkbox-box',
    input: 'v-checkbox-input',
    checkIcon: 'v-checkbox-icon',
    uncheckIcon: 'v-checkbox-icon',
    nullableIcon: 'v-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'tristatecheckbox',
    classes
});

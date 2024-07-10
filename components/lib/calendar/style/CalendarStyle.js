import BaseStyle from '@coscom/coscom-ui/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ props, state }) => [
        'v-calendar v-component v-inputwrapper',
        {
            'v-calendar-w-btn': props.showIcon && props.iconDisplay === 'button',
            'v-icon-field v-icon-field-right': props.showIcon && props.iconDisplay === 'input',
            'v-calendar-timeonly': props.timeOnly,
            'v-calendar-disabled': props.disabled,
            'v-invalid': props.invalid,
            'v-inputwrapper-filled': props.modelValue,
            'v-inputwrapper-focus': state.focused,
            'v-focus': state.focused || state.overlayVisible
        }
    ],
    input: ({ props, instance }) => [
        'v-inputtext v-component',
        {
            'v-variant-filled': props.variant ? props.variant === 'filled' : instance.$coscom.config.inputStyle === 'filled'
        }
    ],
    dropdownButton: 'v-datepicker-trigger',
    inputIcon: 'v-datepicker-trigger-icon v-input-icon',
    panel: ({ instance, props, state }) => [
        'v-datepicker v-component',
        {
            'v-datepicker-mobile': instance.queryMatches,
            'v-datepicker-inline': props.inline,
            'v-disabled': props.disabled,
            'v-datepicker-timeonly': props.timeOnly,
            'v-datepicker-multiple-month': props.numberOfMonths > 1,
            'v-datepicker-monthpicker': state.currentView === 'month',
            'v-datepicker-yearpicker': state.currentView === 'year',
            'v-datepicker-touch-ui': props.touchUI,
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    groupContainer: 'v-datepicker-group-container',
    group: 'v-datepicker-group',
    header: 'v-datepicker-header',
    previousButton: 'v-datepicker-prev v-link',
    previousIcon: 'v-datepicker-prev-icon',
    title: 'v-datepicker-title',
    monthTitle: 'v-datepicker-month v-link',
    yearTitle: 'v-datepicker-year v-link',
    decadeTitle: 'v-datepicker-decade',
    nextButton: 'v-datepicker-next v-link',
    nextIcon: 'v-datepicker-next-icon',
    container: 'v-datepicker-calendar-container',
    table: 'v-datepicker-calendar',
    weekHeader: 'v-datepicker-weekheader v-disabled',
    weekNumber: 'v-datepicker-weeknumber',
    weekLabelContainer: 'v-disabled',
    day: ({ date }) => [{ 'v-datepicker-other-month': date.otherMonth, 'v-datepicker-today': date.today }],
    dayLabel: ({ instance, date }) => [{ 'v-highlight': instance.isSelected(date) && date.selectable, 'v-disabled': !date.selectable }],
    monthPicker: 'v-monthpicker',
    month: ({ instance, month, index }) => ['v-monthpicker-month', { 'v-highlight': instance.isMonthSelected(index), 'v-disabled': !month.selectable }],
    yearPicker: 'v-yearpicker',
    year: ({ instance, year }) => ['v-yearpicker-year', { 'v-highlight': instance.isYearSelected(year.value), 'v-disabled': !year.selectable }],
    timePicker: 'v-timepicker',
    hourPicker: 'v-hour-picker',
    incrementButton: 'v-link',
    decrementButton: 'v-link',
    separatorContainer: 'v-separator',
    minutePicker: 'v-minute-picker',
    secondPicker: 'v-second-picker',
    ampmPicker: 'v-ampm-picker',
    buttonbar: 'v-datepicker-buttonbar',
    todayButton: 'v-button-text',
    clearButton: 'v-button-text'
};

export default BaseStyle.extend({
    name: 'calendar',
    classes,
    inlineStyles
});

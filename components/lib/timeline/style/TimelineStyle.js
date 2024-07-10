import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => ['v-timeline v-component', 'v-timeline-' + props.align, 'v-timeline-' + props.layout],
    event: 'v-timeline-event',
    opposite: 'v-timeline-event-opposite',
    separator: 'v-timeline-event-separator',
    marker: 'v-timeline-event-marker',
    connector: 'v-timeline-event-connector',
    content: 'v-timeline-event-content'
};

export default BaseStyle.extend({
    name: 'timeline',
    classes
});

import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance }) => [
        'v-confirm-popup v-component',
        {
            'v-ripple-disabled': instance.$coscom.config.ripple === false
        }
    ],
    content: 'v-confirm-popup-content',
    icon: 'v-confirm-popup-icon',
    message: 'v-confirm-popup-message',
    footer: 'v-confirm-popup-footer',
    rejectButton: ({ instance }) => ['v-confirm-popup-reject', instance.confirmation && !instance.confirmation.rejectClass ? 'v-button-sm v-button-text' : null],
    acceptButton: ({ instance }) => ['v-confirm-popup-accept', instance.confirmation && !instance.confirmation.acceptClass ? 'v-button-sm' : null]
};

export default BaseStyle.extend({
    name: 'confirmpopup',
    classes
});

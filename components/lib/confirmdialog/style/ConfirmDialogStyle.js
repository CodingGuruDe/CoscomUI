import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-confirm-dialog',
    icon: 'v-confirm-dialog-icon',
    message: 'v-confirm-dialog-message',
    rejectButton: ({ instance }) => ['v-confirm-dialog-reject', instance.confirmation && !instance.confirmation.rejectClass ? 'v-button-text' : null],
    acceptButton: 'v-confirm-dialog-accept'
};

export default BaseStyle.extend({
    name: 'confirmdialog',
    classes
});

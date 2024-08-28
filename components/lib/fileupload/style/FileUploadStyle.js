import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [`v-fileupload v-fileupload-${props.mode} v-component`],
    buttonbar: 'v-fileupload-buttonbar',
    chooseButton: ({ instance, props }) => [
        'v-button v-component v-fileupload-choose',
        {
            'v-fileupload-choose-selected': props.mode === 'basic' && instance.hasFiles,
            'v-disabled': props.disabled,
            'v-focus': instance.focused
        }
    ],
    chooseIcon: 'v-button-icon v-button-icon-left',
    chooseButtonLabel: 'v-button-label',
    content: 'v-fileupload-content',
    empty: 'v-fileupload-empty',
    uploadIcon: 'v-button-icon v-button-icon-left',
    label: 'v-button-label',
    file: 'v-fileupload-file',
    thumbnail: 'v-fileupload-file-thumbnail',
    details: 'v-fileupload-file-details',
    fileName: 'v-fileupload-file-name',
    fileSize: 'v-fileupload-file-size',
    badge: 'v-fileupload-file-badge',
    actions: 'v-fileupload-file-actions',
    removeButton: 'v-fileupload-file-remove'
};

export default BaseStyle.extend({
    name: 'fileupload',
    classes
});

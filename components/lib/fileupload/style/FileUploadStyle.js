import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} v-component`],
    buttonbar: 'v-fileupload-buttonbar',
    chooseButton: ({ instance, props }) => [
        'v-button v-component p-fileupload-choose',
        {
            'v-fileupload-choose-selected': props.mode === 'basic' && instance.hasFiles,
            'v-disabled': props.disabled,
            'v-focus': instance.focused
        }
    ],
    chooseIcon: 'v-button-icon p-button-icon-left',
    chooseButtonLabel: 'v-button-label',
    content: 'v-fileupload-content',
    empty: 'v-fileupload-empty',
    uploadIcon: 'v-button-icon p-button-icon-left',
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

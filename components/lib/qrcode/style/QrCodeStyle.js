import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: ({ instance, props }) => ['v-qrcode v-component', 'qr-code']
};

export default BaseStyle.extend({
    name: 'qrcode',
    classes
});

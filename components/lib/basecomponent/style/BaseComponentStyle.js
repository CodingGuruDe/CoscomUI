import BaseStyle from '@coscom/coscom-ui/base/style';
import { useStyle } from '@coscom/coscom-ui/usestyle';

export default BaseStyle.extend({
    name: 'common',
    loadGlobalStyle: (globalCSS, options = {}) => useStyle(globalCSS, { name: 'global', ...options })
});

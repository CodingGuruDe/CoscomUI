import ConfirmationEventBus from '@coscom/coscom-ui/confirmationeventbus';
import { CoscomUIConfirmSymbol } from '@coscom/coscom-ui/useconfirm';

export default {
    install: (app) => {
        const ConfirmationService = {
            require: (options) => {
                ConfirmationEventBus.emit('confirm', options);
            },
            close: () => {
                ConfirmationEventBus.emit('close');
            }
        };

        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(CoscomUIConfirmSymbol, ConfirmationService);
    }
};

import { inject } from 'vue';

export const CoscomDialogSymbol = Symbol();

export function useDialog() {
    const CoscomDialog = inject(CoscomDialogSymbol);

    if (!CoscomDialog) {
        throw new Error('No Dialog provided!');
    }

    return CoscomDialog;
}

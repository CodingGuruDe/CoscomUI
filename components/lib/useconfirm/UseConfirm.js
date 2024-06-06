import { inject } from 'vue';

export const CoscomUIConfirmSymbol = Symbol();

export function useConfirm() {
    const CoscomUIConfirm = inject(CoscomUIConfirmSymbol);

    if (!CoscomUIConfirm) {
        throw new Error('No Coscom UI Confirmation provided!');
    }

    return CoscomUIConfirm;
}

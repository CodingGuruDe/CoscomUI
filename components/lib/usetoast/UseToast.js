import { inject } from 'vue';

export const CoscomToastSymbol = Symbol();

export function useToast() {
    const CoscomToast = inject(CoscomToastSymbol);

    if (!CoscomToast) {
        throw new Error('No Toast provided!');
    }

    return CoscomToast;
}

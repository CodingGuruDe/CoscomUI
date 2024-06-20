import { config } from '@vue/test-utils';
import { defaultOptions } from 'coscom/config';

config.global.mocks['$coscom'] = {
    config: defaultOptions
};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
    }))
});

describe('Coscom.vue', () => {
    it('should exist', async () => {});
});

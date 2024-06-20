import { mount } from '@vue/test-utils';
import CoscomUI from '@coscom/coscom-ui/config';
import ScrollTop from './ScrollTop.vue';

describe('ScrollTop.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ScrollTop, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    transition: false
                }
            }
        });
    });

    it('should exist', async () => {
        await wrapper.setData({ visible: true });

        expect(wrapper.find('.p-scrolltop.p-component').exists()).toBe(true);
    });
});

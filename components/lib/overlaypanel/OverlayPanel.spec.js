import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import OverlayPanel from './OverlayPanel.vue';

describe('OverlayPanel.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(OverlayPanel, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                showCloseIcon: true
            },
            slots: {
                default: 'CoscomUI'
            }
        });

        await wrapper.vm.toggle({}, {});
    });

    it('should exist', () => {
        expect(wrapper.find('.v-overlaypanel.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-overlaypanel-content').exists()).toBe(true);
        expect(wrapper.find('.v-overlaypanel-content').text()).toBe('CoscomUI');
        expect(wrapper.find('.v-overlaypanel-close').exists()).toBe(true);
    });
});

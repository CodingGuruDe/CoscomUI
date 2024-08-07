import { mount } from '@vue/test-utils';
import Chip from './Chip.vue';

describe('Chip.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Chip, {
            props: {
                label: 'CoscomUI',
                icon: 'cs el-discord',
                removable: true
            }
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should exists', () => {
        expect(wrapper.find('.v-chip.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-chip-icon').classes()).toContain('el-discord');
        expect(wrapper.find('.v-chip-text').text()).toBe('CoscomUI');
        expect(wrapper.find('.v-chip-remove-icon').exists()).toBe(true);
    });

    it('should close icon work', async () => {
        await wrapper.find('.v-chip-remove-icon').trigger('click');

        expect(wrapper.find('.v-chip.v-component').exists()).toBe(false);
    });

    it('When removable is true and keydown triggered OnKeydown method should be called', async () => {
        const closeSpy = vi.spyOn(wrapper.vm, 'onKeydown');

        wrapper.vm.onKeydown({ key: 'Enter' });

        expect(closeSpy).toHaveBeenCalled();
    });
    it('When onKeyDown method triggered close method should be called', async () => {
        const closeSpy = vi.spyOn(wrapper.vm, 'close');

        await wrapper.vm.onKeydown({ key: 'Enter' });

        expect(closeSpy).toHaveBeenCalled();
    });
});

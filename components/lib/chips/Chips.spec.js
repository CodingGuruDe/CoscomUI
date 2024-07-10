import { mount } from '@vue/test-utils';
import Chips from './Chips.vue';

describe('Chips.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Chips, {
            props: {
                modelValue: null
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-chips.v-component.v-inputwrapper').exists()).toBe(true);
        expect(wrapper.find('ul.v-chips-multiple-container').exists()).toBe(true);
        expect(wrapper.find('li.v-chips-input-token').exists()).toBe(true);
    });

    it('should add item', async () => {
        const addItem = vi.spyOn(wrapper.vm, 'addItem');

        await wrapper.vm.addItem({}, 'CoscomUI', false);

        await wrapper.setProps({ modelValue: ['CoscomUI'] });

        expect(addItem).toHaveBeenCalled();
        expect(wrapper.findAll('.v-chips-token').length).toBe(1);
        expect(wrapper.find('.v-chips-token-label').exists()).toBe(true);
        expect(wrapper.find('.v-chips-token-label').text()).toBe('CoscomUI');
    });

    it('should have correct custom chip removal icon', async () => {
        await wrapper.setProps({
            modelValue: ['foo', 'bar'],
            removeTokenIcon: 'cs el-discord'
        });

        const icon = wrapper.find('.v-chips-token-icon');

        expect(icon.classes()).toContain('el-discord');
    });
});

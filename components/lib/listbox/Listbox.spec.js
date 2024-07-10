import { mount } from '@vue/test-utils';
import Listbox from './Listbox.vue';

describe('Listbox.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Listbox, {
            props: {
                modelValue: null,
                options: [
                    { name: 'Zagreb', code: 'ZG' },
                    { name: 'Split', code: 'ST' },
                    { name: 'Ebersberg', code: 'EBE' },
                    { name: 'Munich', code: 'M' },
                    { name: 'Paris', code: 'PRS' }
                ],
                optionLabel: 'name'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-listbox.v-component').exists()).toBe(true);
        expect(wrapper.findAll('li.v-listbox-item').length).toBe(5);
        expect(wrapper.findAll('li.v-listbox-item')[0].attributes()['aria-label']).toBe('Zagreb');
    });

    it('should select a list item', async () => {
        await wrapper.vm.onOptionSelect({}, wrapper.vm.options[0]);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([wrapper.vm.options[0]]);

        await wrapper.setProps({ modelValue: wrapper.vm.options[0] });

        expect(wrapper.findAll('li.v-listbox-item')[0].classes()).toContain('v-highlight');
    });

    describe('filter', () => {
        it('should have correct custom icon', async () => {
            await wrapper.setProps({
                filter: true,
                filterIcon: 'cs el-discord'
            });

            const icon = wrapper.find('.v-listbox-filter-icon');

            expect(icon.classes()).toContain('el-discord');
        });
    });
});

import { mount } from '@vue/test-utils';
import SelectButton from './SelectButton.vue';

describe('SelectButton.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(SelectButton, {
            props: {
                modelValue: null,
                options: ['Off', 'On']
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-selectbutton.v-component').exists()).toBe(true);
        expect(wrapper.findAll('.v-button.v-component').length).toBe(2);
    });

    it('should option select', async () => {
        await wrapper.vm.onOptionSelect({}, wrapper.vm.options[0]);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['Off']);

        await wrapper.setProps({ modelValue: wrapper.vm.options[0] });

        expect(wrapper.findAll('.v-button.v-component')[0].classes()).toContain('v-highlight');
    });
});

describe('multiple select', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(SelectButton, {
            props: {
                modelValue: null,
                options: [
                    { name: 'Option 1', value: 1 },
                    { name: 'Option 2', value: 2 },
                    { name: 'Option 3', value: 3 }
                ],
                optionLabel: 'name',
                multiple: true
            }
        });
    });

    it('should select', async () => {
        await wrapper.setProps({ modelValue: wrapper.vm.options });

        expect(wrapper.findAll('.v-highlight').length).toBe(3);
    });
});

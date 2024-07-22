import { mount } from '@vue/test-utils';
import InputText from '../inputtext/InputText.vue';

describe('InputText.vue', () => {
    it('is InputText component exists', async () => {
        const wrapper = mount(InputText);

        expect(wrapper.find('.v-inputtext.v-component').exists()).toBe(true);

        await wrapper.setProps({ modelValue: 'The rain dampened the sky' });

        expect(wrapper.find('.v-filled').exists()).toBe(true);

        const input = wrapper.find('input');

        expect(input.element.value).toEqual('The rain dampened the sky');
    });

    it('input event', async () => {
        const wrapper = mount(InputText);
        const event = { target: { value: 'a' } };

        await wrapper.vm.onInput(event);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['a']);
    });

    it('should filled work', async () => {
        const wrapper = mount(InputText);

        await wrapper.setProps({ modelValue: 'The rain dampened the sky' });

        expect(wrapper.vm.filled).toBe(true);
    });
});

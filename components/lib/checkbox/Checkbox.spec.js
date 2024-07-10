import { mount } from '@vue/test-utils';
import Checkbox from './Checkbox.vue';

describe('Checkbox.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
                binary: true
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-checkbox.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-checkbox-icon.cs.el-check').exists()).toBe(false);
    });

    it('should exist', async () => {
        await wrapper.setProps({ modelValue: true });

        expect(wrapper.find('.v-checkbox.v-highlight').exists()).toBe(true);
    });
});

import { mount } from '@vue/test-utils';
import DataViewLayoutOptions from './DataViewLayoutOptions.vue';

describe('DataViewLayoutOptions.vue', () => {
    it('should exist', async () => {
        const wrapper = mount(DataViewLayoutOptions, {
            props: {
                modelValue: 'grid'
            }
        });

        expect(wrapper.find('.v-dataview-layout-options').exists()).toBe(true);

        wrapper.vm.$emit('update:modelValue', 'list');

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['list']);
    });
});

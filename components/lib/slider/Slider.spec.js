import { mount } from '@vue/test-utils';
import Slider from './Slider.vue';

describe('Slider.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Slider, {
            props: {
                modelValue: null
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-slider.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-slider').classes()).toContain('v-slider-horizontal');
    });

    it('should drag start and end', async () => {
        await wrapper.vm.onDragStart({ preventDefault: () => {}, currentTarget: { focus: () => {} } });

        expect(wrapper.find('.v-slider').classes()).toStrictEqual(['v-slider', 'v-component', 'v-slider-horizontal']);

        await wrapper.vm.onDragEnd();

        expect(wrapper.find('.v-slider').classes()).not.toContain('v-slider-sliding');
    });

    it('should set value', async () => {
        wrapper.element.setAttribute('width', '14rem');

        await wrapper.vm.updateDomData();

        await wrapper.vm.setValue({ pageX: 60 }); // TODO:

        expect(wrapper.emitted()['update:modelValue'][0][0]).toBeGreaterThan(0);
    });

    it('should set value on vertical mode', async () => {
        await wrapper.setProps({ orientation: 'vertical', modelValue: 0 });

        await wrapper.vm.updateDomData();

        await wrapper.vm.setValue({ pageY: 111 }); // TODO:

        expect(wrapper.emitted()['update:modelValue'][0][0]).toBe(0);
    });
});

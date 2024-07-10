import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import ColorPicker from './ColorPicker.vue';

describe('ColorPicker.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ColorPicker, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                modelValue: null
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-colorpicker.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-colorpicker-preview.v-inputtext').exists()).toBe(true);
    });

    it('should input click triggered', async () => {
        const input = wrapper.find('.v-colorpicker-preview.v-inputtext');
        const onInputClick = vi.spyOn(wrapper.vm, 'onInputClick');

        await input.trigger('click');

        expect(onInputClick).toHaveBeenCalled();
        expect(wrapper.find('.v-colorpicker-panel').exists()).toBe(true);
        expect(wrapper.find('.v-colorpicker-color-selector').exists()).toBe(true);
        expect(wrapper.find('.v-colorpicker-hue').exists()).toBe(true);
    });

    it('should mouse events triggered', async () => {
        const input = wrapper.find('.v-colorpicker-preview.v-inputtext');

        await input.trigger('click');

        const onColorMousedown = vi.spyOn(wrapper.vm, 'onColorMousedown');
        const onHueMousedown = vi.spyOn(wrapper.vm, 'onHueMousedown');
        const event = { pageX: 100, pageY: 120, preventDefault: () => {} };
        const event2 = { pageX: 70, pageY: 20, preventDefault: () => {} };

        wrapper.vm.onColorMousedown(event);

        expect(onColorMousedown).toHaveBeenCalled();
        expect(wrapper.find('.v-colorpicker-preview.v-inputtext').element.style.backgroundColor).not.toBe('rgb(255, 0, 0)');

        wrapper.vm.onHueMousedown(event2);

        expect(onHueMousedown).toHaveBeenCalled();
        expect(wrapper.find('.v-colorpicker-preview.v-inputtext').element.style.backgroundColor).not.toBe('rgb(255, 0, 0)');
    });
});

import { mount } from '@vue/test-utils';
import Fieldset from './Fieldset.vue';

describe('Fieldset.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Fieldset, {
            props: {
                legend: 'Header',
                toggleable: true,
                collapsed: true
            },
            slots: {
                default: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>`
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-fieldset.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-fieldset-legend').exists()).toBe(true);
        expect(wrapper.find('.v-toggleable-content').exists()).toBe(true);
    });

    it('toggleable check', async () => {
        await wrapper.setProps({ collapsed: false });
        wrapper.vm.toggle({});
        expect(wrapper.emitted()['update:collapsed'][0]).toEqual([true]);
    });
});

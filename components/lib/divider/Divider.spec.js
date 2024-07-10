import { mount } from '@vue/test-utils';
import Divider from './Divider.vue';

describe('Divider.vue', () => {
    it('should exist', () => {
        const wrapper = mount(Divider);

        expect(wrapper.find('.v-divider.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-divider.v-component').classes()).toContain('v-divider-horizontal');
        expect(wrapper.find('.v-divider.v-component').classes()).toContain('v-divider-left');
    });

    it('should exist', () => {
        const wrapper = mount(Divider, {
            props: {
                layout: 'vertical',
                align: 'center',
                type: 'dashed'
            }
        });

        expect(wrapper.find('.v-divider-vertical').exists()).toBe(true);
        expect(wrapper.find('.v-divider-dashed').exists()).toBe(true);
        expect(wrapper.find('.v-divider-center').exists()).toBe(true);
    });
});

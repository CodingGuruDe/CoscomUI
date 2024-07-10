import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import Badge from './Badge.vue';

let wrapper = null;

describe('Badge.vue', () => {
    beforeEach(() => {
        wrapper = mount(Badge, {
            props: {
                value: '29',
                severity: 'warning',
                size: 'large'
            }
        });
    });
    it('should exist', () => {
        expect(wrapper.find('.v-badge.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-badge-warning').exists()).toBe(true);
        expect(wrapper.find('.v-badge-lg').exists()).toBe(true);
        expect(wrapper.find('.v-badge-no-gutter').exists()).toBe(false);

        expect(wrapper.vm.containerClass).not.toBe('v-overlay-badge');
    });
});

import { mount } from '@vue/test-utils';
import { beforeEach } from 'vitest';
import Avatar from './Avatar.vue';

let wrapper = null;

beforeEach(() => {
    wrapper = mount(Avatar, {
        props: {
            label: 'T',
            size: 'large',
            shape: 'circle',
            image: 'test'
        }
    });
});

describe('Avatar.vue', () => {
    it('should exist', () => {
        expect(wrapper.find('.v-avatar.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-avatar-lg').exists()).toBe(true);
        expect(wrapper.find('.v-avatar-circle').exists()).toBe(true);
        expect(wrapper.find('.v-avatar-text').exists()).toBe(true);
        expect(wrapper.find('.v-avatar-text').text()).toBe('T');
    });

    it('should exist', async () => {
        await wrapper.setProps({ image: 'imageTest' });
        const image = wrapper.find('.v-avatar-image');

        await wrapper.vm.onError();

        expect(image.exists()).toBe(true);
        expect(wrapper.emitted().error.length).toBe(1);
    });
});

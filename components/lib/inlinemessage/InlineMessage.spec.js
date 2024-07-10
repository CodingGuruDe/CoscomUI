import { mount } from '@vue/test-utils';
import InlineMessage from './InlineMessage.vue';

describe('InlineMessage.vue', () => {
    it('should exist', () => {
        const wrapper = mount(InlineMessage, {
            slots: {
                default: 'Username is required'
            },
            props: {
                severity: 'error'
            }
        });

        expect(wrapper.find('.v-inline-message.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-inline-message.v-component').text()).toBe('Username is required');
        expect(wrapper.find('.v-inline-message-error').exists()).toBe(true);
    });
});

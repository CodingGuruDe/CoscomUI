import { mount } from '@vue/test-utils';
import Message from './Message.vue';

describe('Message.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Message, {
            props: {
                severity: 'error'
            },
            slots: {
                default: 'Error Message Content'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-message.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-message.v-component').classes()).toContain('v-message-error');
        expect(wrapper.find('.v-message-text').text()).toContain('Error Message Content');
    });

    it('should close the message', async () => {
        await wrapper.vm.close({});

        expect(wrapper.vm.visible).toBe(false);
        expect(wrapper.emitted().close[0]).toEqual([{}]);
    });

    it('should have custom close icon if provided', async () => {
        await wrapper.setProps({ closeIcon: 'cs el-discord' });
        const icon = wrapper.find('.v-message-close-icon');

        expect(icon.classes()).toContain('el-discord');
    });
});

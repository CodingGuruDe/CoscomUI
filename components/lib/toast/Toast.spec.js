import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import Toast from './Toast.vue';

describe('Toast.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Toast, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true,
                    transition: true
                }
            },
            data() {
                return {
                    messages: [{ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 }]
                };
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-toast.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-toast-message').classes()).toContain('v-toast-message-success');
        expect(wrapper.find('.v-toast-summary').text()).toBe('Success Message');
        expect(wrapper.find('.v-toast-detail').text()).toBe('Message Content');
    });

    it('should show grouped toast', async () => {
        await wrapper.setProps({ group: 'br' });

        expect(wrapper.find('.v-toast.v-component').exists()).toBe(true);
    });

    it('should close toast', async () => {
        await wrapper.vm.remove({ message: { severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 }, type: 'close' });

        expect(wrapper.emitted()['close'][0][0].message).not.toBe({});
        expect(wrapper.find('.v-toast-message').exists()).toBe(false);
    });

    it('should show multiple toast', async () => {
        await wrapper.setData({
            messages: [
                { severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 },
                { severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 },
                { severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 }
            ]
        });

        expect(wrapper.findAll('.v-toast-message').length).toBe(3);
    });

    it('should close multiple toast', async () => {
        await wrapper.setData({
            messages: [
                { severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 },
                { severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 },
                { severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 }
            ]
        });

        await wrapper.vm.onRemoveAllGroups();

        expect(wrapper.findAll('.v-toast-message').length).toBe(0);
    });

    it('should close grouped toast', async () => {
        await wrapper.setProps({ group: 'br' });

        await wrapper.vm.onRemoveGroup('br');

        expect(wrapper.findAll('.v-toast-message').length).toBe(0);
    });

    describe('custom icons', () => {
        it('should have custom close icon', async () => {
            await wrapper.setProps({ closeIcon: 'cs el-discord' });
            await wrapper.setData({
                messages: [{ severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 }]
            });

            const icon = wrapper.find('.v-toast-icon-close-icon');

            expect(icon.classes()).toContain('el-discord');
        });

        it('should have custom info severity icon', async () => {
            await wrapper.setProps({ infoIcon: 'cs el-discord' });
            await wrapper.setData({
                messages: [{ severity: 'info', summary: 'Message', detail: 'Message Content', life: 3000 }]
            });

            const icon = wrapper.find('.v-toast-message-icon');

            expect(icon.classes()).toContain('el-discord');
        });

        it('should have custom warn severity icon', async () => {
            await wrapper.setProps({ warnIcon: 'cs el-discord' });
            await wrapper.setData({
                messages: [{ severity: 'warn', summary: 'Message', detail: 'Message Content', life: 3000 }]
            });

            const icon = wrapper.find('.v-toast-message-icon');

            expect(icon.classes()).toContain('el-discord');
        });

        it('should have custom error severity icon', async () => {
            await wrapper.setProps({ errorIcon: 'cs el-discord' });
            await wrapper.setData({
                messages: [{ severity: 'error', summary: 'Message', detail: 'Message Content', life: 3000 }]
            });

            const icon = wrapper.find('.v-toast-message-icon');

            expect(icon.classes()).toContain('el-discord');
        });

        it('should have custom success severity icon', async () => {
            await wrapper.setProps({ successIcon: 'cs el-discord' });
            await wrapper.setData({
                messages: [{ severity: 'success', summary: 'Message', detail: 'Message Content', life: 3000 }]
            });

            const icon = wrapper.find('.v-toast-message-icon');

            expect(icon.classes()).toContain('el-discord');
        });
    });
});

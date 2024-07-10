import CoscomUI from 'coscom/config';
import { mount } from '@vue/test-utils';
import Dialog from './Dialog.vue';

describe('Dialog.vue', () => {
    it('is Dialog element exist', async () => {
        const wrapper = mount(Dialog, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true,
                    transition: false
                }
            },
            props: {
                visible: false
            },
            data() {
                return {
                    containerVisible: true
                };
            }
        });

        expect(wrapper.find('.v-dialog.v-component').exists()).toBe(false);

        await wrapper.setProps({ visible: true });

        expect(wrapper.find('.v-dialog.v-component').exists()).toBe(true);
    });

    it('slot checks', async () => {
        const wrapper = mount(Dialog, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            slots: {
                default: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
                footer: '<p>Dialog Footer</p>'
            },
            data() {
                return {
                    containerVisible: true
                };
            }
        });

        await wrapper.setProps({ visible: true });

        expect(wrapper.find('.v-dialog-content').exists()).toBe(true);
        expect(wrapper.find('.v-dialog-footer').exists()).toBe(true);
    });
});

describe('closable', () => {
    it('should have custom close icon when provided', async () => {
        const wrapper = mount(Dialog, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                closable: true,
                closeIcon: 'cs el-discord',
                showHeader: true,
                visible: false
            },
            data() {
                return {
                    containerVisible: true
                };
            }
        });

        await wrapper.setProps({ visible: true });

        const icon = wrapper.find('.v-dialog-header-close-icon');

        expect(icon.classes()).toContain('el-discord');
    });
});

describe('maximizable', () => {
    it('should have custom maximize and minimize icons when provided', async () => {
        const wrapper = mount(Dialog, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                maximizable: true,
                maximizeIcon: 'cs el-discord',
                minimizeIcon: 'cs el-facebook',
                showHeader: true,
                visible: false
            },
            data() {
                return {
                    containerVisible: true
                };
            }
        });

        await wrapper.setProps({ visible: true });
        await wrapper.setData({ maximized: false });

        const icon = wrapper.find('.v-dialog-header-maximize-icon');

        expect(icon.classes()).toContain('el-discord');

        await wrapper.setData({ maximized: true });

        expect(icon.classes()).toContain('el-facebook');
    });
});

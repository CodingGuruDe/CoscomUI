import { mount } from '@vue/test-utils';
import InputText from '@coscom/coscom-ui/inputtext';
import Inplace from './Inplace.vue';

describe('Inplace.vue', () => {
    it('should exist', () => {
        const wrapper = mount(Inplace);

        expect(wrapper.find('.v-inplace.v-component').exists()).toBe(true);
    });

    it('should slots display', () => {
        const wrapper = mount(Inplace, {
            global: {
                components: {
                    InputText
                }
            },
            slots: {
                display: `
                    <span class="cs el-search" style="vertical-align: middle"></span>
                    <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>
                `,
                content: `<img src="/images/nature/nature1.jpg" />`
            }
        });

        expect(wrapper.find('.v-inplace-display').exists()).toBe(true);

        wrapper.vm.open({});

        expect(wrapper.emitted()['update:active'][0]).toEqual([true]);

        wrapper.vm.close({});

        expect(wrapper.emitted()['update:active'][1]).toEqual([false]);
    });

    it('closable inplace', async () => {
        const wrapper = mount(Inplace, {
            global: {
                components: {
                    InputText
                }
            },
            props: {
                closable: true
            },
            slots: {
                display: `{{'Click to Edit'}}`,
                content: `<InputText autofocus />`
            }
        });

        expect(wrapper.find('.v-inplace-closable').exists()).toBe(true);
        expect(wrapper.find('.v-inplace-display').text()).toBe('Click to Edit');

        await wrapper.vm.open({});

        expect(wrapper.find('.v-inputtext').exists()).toBe(true);
        expect(wrapper.find('.v-inplace-content').exists()).toBe(true);

        await wrapper.vm.close({});

        expect(wrapper.find('.v-inplace-display').exists()).toBe(true);
        expect(wrapper.find('.v-inplace-content').exists()).toBe(false);
    });

    it('should have custom close icon', async () => {
        const wrapper = mount(Inplace, {
            global: {
                components: {
                    InputText
                }
            },
            props: {
                closable: true,
                closeIcon: 'cs el-discord'
            },
            slots: {
                display: `{{'Click to Edit'}}`,
                content: `<InputText autofocus />`
            }
        });

        await wrapper.vm.open({});

        expect(wrapper.find('.cs.el-discord').exists()).toBe(true);
    });
});

import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import SplitButton from './SplitButton.vue';

describe('SplitButton.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(SplitButton, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true,
                    'router-link': true
                }
            },
            props: {
                label: 'Save',
                model: [
                    {
                        label: 'Update',
                        icon: 'cs el-refresh'
                    },
                    {
                        label: 'Delete',
                        icon: 'cs el-times'
                    },
                    {
                        label: 'Vue Website',
                        icon: 'cs el-external-link',
                        command: () => {
                            window.location.href = 'https://vuejs.org/';
                        }
                    },
                    { label: 'Upload', icon: 'cs el-upload', to: '/fileupload' }
                ]
            }
        });

        await wrapper.vm.onDropdownButtonClick();
    });

    it('should exist', () => {
        expect(wrapper.find('.v-splitbutton.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-tieredmenu.v-component').exists()).toBe(true);
        expect(wrapper.findAll('li.v-menuitem').length).toBe(4);
        expect(wrapper.find('.v-splitbutton-defaultbutton').exists()).toBe(true);
        expect(wrapper.find('.v-button-label').text()).toBe('Save');
    });

    it('should hide when default button is clicked', async () => {
        await wrapper.vm.onDefaultButtonClick();

        expect(wrapper.emitted()['click'][0]).toEqual([undefined]);
    });
});

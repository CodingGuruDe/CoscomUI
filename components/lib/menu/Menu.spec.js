import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import Menu from './Menu.vue';

describe('Menu.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Menu, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    'router-link': true,
                    teleport: true
                }
            },
            props: {
                model: [
                    {
                        label: 'Options',
                        items: [
                            {
                                label: 'Update',
                                icon: 'cs el-refresh',
                                command: () => {
                                    this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                                }
                            },
                            {
                                label: 'Delete',
                                icon: 'cs el-times',
                                command: () => {
                                    this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                                }
                            }
                        ]
                    },
                    {
                        label: 'Navigate',
                        items: [
                            {
                                label: 'Vue Website',
                                icon: 'cs el-external-link',
                                url: 'https://vuejs.org/'
                            },
                            {
                                label: 'Router',
                                icon: 'cs el-upload',
                                to: '/fileupload'
                            }
                        ]
                    }
                ]
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-menu.v-component').exists()).toBe(true);
        expect(wrapper.findAll('.v-submenu-header').length).toBe(2);
        expect(wrapper.findAll('.v-submenu-header')[0].text()).toBe('Options');
        expect(wrapper.findAll('.v-menuitem').length).toBe(4);
        expect(wrapper.findAll('.v-menuitem')[0].find('span.v-menuitem-text').text()).toBe('Update');
        expect(wrapper.findAll('.v-menuitem')[2].find('a').attributes().href).toBe('https://vuejs.org/');
    });

    it('should popup work', async () => {
        await wrapper.setProps({ popup: true });

        await wrapper.vm.toggle({});

        expect(wrapper.find('.v-menu.v-component').exists()).toBe(true);
    });
});

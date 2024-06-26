import { mount } from '@vue/test-utils';
import Menubar from './Menubar.vue';

describe('Menubar.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Menubar, {
            global: {
                stubs: {
                    'router-link': true
                }
            },
            props: {
                model: [
                    {
                        label: 'File',
                        icon: 'cs el-fw pi-file',
                        items: [
                            {
                                label: 'New',
                                icon: 'cs el-fw pi-plus',
                                items: [
                                    {
                                        label: 'Bookmark',
                                        icon: 'cs el-fw pi-bookmark'
                                    },
                                    {
                                        label: 'Video',
                                        icon: 'cs el-fw pi-video'
                                    }
                                ]
                            },
                            {
                                label: 'Delete',
                                icon: 'cs el-fw pi-trash'
                            },
                            {
                                separator: true
                            },
                            {
                                label: 'Export',
                                icon: 'cs el-fw pi-external-link'
                            }
                        ]
                    },
                    {
                        label: 'Quit',
                        icon: 'cs el-fw pi-power-off'
                    }
                ]
            },
            slots: {
                start: 'Start Slot',
                end: 'End Slot'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-menubar.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-menubar-root-list').exists()).toBe(true);
        expect(wrapper.findAll('ul.p-submenu-list').length).toBe(2);
        expect(wrapper.findAll('ul.p-submenu-list')[0].findAll('li.p-menuitem')[0].find('.p-menuitem-text').text()).toBe('New');
        expect(wrapper.findAll('li.p-menuitem').length).toBe(7);
        expect(wrapper.findAll('li.p-menuitem-separator').length).toBe(1);
    });

    it('should slot visible', () => {
        expect(wrapper.find('.p-menubar-start').exists()).toBe(true);
        expect(wrapper.find('.p-menubar-end').exists()).toBe(true);
        expect(wrapper.find('.p-menubar-end').text()).toBe('End Slot');
    });
});

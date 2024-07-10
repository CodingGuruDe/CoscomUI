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
                        icon: 'cs el-fw el-file',
                        items: [
                            {
                                label: 'New',
                                icon: 'cs el-fw el-plus',
                                items: [
                                    {
                                        label: 'Bookmark',
                                        icon: 'cs el-fw el-bookmark'
                                    },
                                    {
                                        label: 'Video',
                                        icon: 'cs el-fw el-video'
                                    }
                                ]
                            },
                            {
                                label: 'Delete',
                                icon: 'cs el-fw el-trash'
                            },
                            {
                                separator: true
                            },
                            {
                                label: 'Export',
                                icon: 'cs el-fw el-external-link'
                            }
                        ]
                    },
                    {
                        label: 'Quit',
                        icon: 'cs el-fw el-power-off'
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
        expect(wrapper.find('.v-menubar.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-menubar-root-list').exists()).toBe(true);
        expect(wrapper.findAll('ul.v-submenu-list').length).toBe(2);
        expect(wrapper.findAll('ul.v-submenu-list')[0].findAll('li.v-menuitem')[0].find('.v-menuitem-text').text()).toBe('New');
        expect(wrapper.findAll('li.v-menuitem').length).toBe(7);
        expect(wrapper.findAll('li.v-menuitem-separator').length).toBe(1);
    });

    it('should slot visible', () => {
        expect(wrapper.find('.v-menubar-start').exists()).toBe(true);
        expect(wrapper.find('.v-menubar-end').exists()).toBe(true);
        expect(wrapper.find('.v-menubar-end').text()).toBe('End Slot');
    });
});

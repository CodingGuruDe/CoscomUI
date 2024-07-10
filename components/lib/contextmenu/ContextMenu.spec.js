import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import ContextMenu from './ContextMenu.vue';

describe('ContextMenu.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ContextMenu, {
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
                        label: 'Edit',
                        icon: 'cs el-fw el-pencil',
                        items: [
                            {
                                label: 'Left',
                                icon: 'cs el-fw el-align-left'
                            },
                            {
                                label: 'Right',
                                icon: 'cs el-fw el-align-right'
                            },
                            {
                                label: 'Center',
                                icon: 'cs el-fw el-align-center'
                            },
                            {
                                label: 'Justify',
                                icon: 'cs el-fw el-align-justify'
                            }
                        ]
                    },
                    {
                        label: 'Users',
                        icon: 'cs el-fw el-user',
                        items: [
                            {
                                label: 'New',
                                icon: 'cs el-fw el-user-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'cs el-fw el-user-minus'
                            },
                            {
                                label: 'Search',
                                icon: 'cs el-fw el-users',
                                items: [
                                    {
                                        label: 'Filter',
                                        icon: 'cs el-fw el-filter',
                                        items: [
                                            {
                                                label: 'Print',
                                                icon: 'cs el-fw el-print'
                                            }
                                        ]
                                    },
                                    {
                                        icon: 'cs el-fw el-bars',
                                        label: 'List'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Events',
                        icon: 'cs el-fw el-calendar',
                        items: [
                            {
                                label: 'Edit',
                                icon: 'cs el-fw el-pencil',
                                items: [
                                    {
                                        label: 'Save',
                                        icon: 'cs el-fw el-calendar-plus'
                                    },
                                    {
                                        label: 'Delete',
                                        icon: 'cs el-fw el-calendar-minus'
                                    }
                                ]
                            },
                            {
                                label: 'Archive',
                                icon: 'cs el-fw el-calendar-times',
                                items: [
                                    {
                                        label: 'Remove',
                                        icon: 'cs el-fw el-calendar-minus'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Quit',
                        icon: 'cs el-fw el-power-off'
                    }
                ]
            }
        });
    });

    it('should exist', async () => {
        const event = { pageX: 100, pageY: 120, preventDefault: () => {}, stopPropagation: () => {} };
        const show = vi.spyOn(wrapper.vm, 'show');

        wrapper.vm.show(event);
        await wrapper.setData({ visible: true });

        expect(show).toHaveBeenCalled();
        expect(wrapper.find('.v-contextmenu.v-component').exists()).toBe(true);
        expect(wrapper.findAll('.v-menuitem').length).toBe(5);
        expect(wrapper.findAll('.v-menuitem-text')[0].text()).toBe('File');
    });

    it('should hide menu', async () => {
        const hide = vi.spyOn(wrapper.vm, 'hide');

        await wrapper.setData({ visible: true });

        wrapper.vm.hide();
        await wrapper.setData({ visible: false });

        expect(hide).toHaveBeenCalled();
        expect(wrapper.find('.v-contextmenu.v-component').exists()).toBe(false);
    });
});

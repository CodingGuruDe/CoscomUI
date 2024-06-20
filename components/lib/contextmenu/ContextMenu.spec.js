import { mount } from '@vue/test-utils';
import CoscomUI from '@coscom/coscom-ui/config';
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
                        label: 'Edit',
                        icon: 'cs el-fw pi-pencil',
                        items: [
                            {
                                label: 'Left',
                                icon: 'cs el-fw pi-align-left'
                            },
                            {
                                label: 'Right',
                                icon: 'cs el-fw pi-align-right'
                            },
                            {
                                label: 'Center',
                                icon: 'cs el-fw pi-align-center'
                            },
                            {
                                label: 'Justify',
                                icon: 'cs el-fw pi-align-justify'
                            }
                        ]
                    },
                    {
                        label: 'Users',
                        icon: 'cs el-fw pi-user',
                        items: [
                            {
                                label: 'New',
                                icon: 'cs el-fw pi-user-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'cs el-fw pi-user-minus'
                            },
                            {
                                label: 'Search',
                                icon: 'cs el-fw pi-users',
                                items: [
                                    {
                                        label: 'Filter',
                                        icon: 'cs el-fw pi-filter',
                                        items: [
                                            {
                                                label: 'Print',
                                                icon: 'cs el-fw pi-print'
                                            }
                                        ]
                                    },
                                    {
                                        icon: 'cs el-fw pi-bars',
                                        label: 'List'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Events',
                        icon: 'cs el-fw pi-calendar',
                        items: [
                            {
                                label: 'Edit',
                                icon: 'cs el-fw pi-pencil',
                                items: [
                                    {
                                        label: 'Save',
                                        icon: 'cs el-fw pi-calendar-plus'
                                    },
                                    {
                                        label: 'Delete',
                                        icon: 'cs el-fw pi-calendar-minus'
                                    }
                                ]
                            },
                            {
                                label: 'Archive',
                                icon: 'cs el-fw pi-calendar-times',
                                items: [
                                    {
                                        label: 'Remove',
                                        icon: 'cs el-fw pi-calendar-minus'
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
                        icon: 'cs el-fw pi-power-off'
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
        expect(wrapper.find('.p-contextmenu.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-menuitem').length).toBe(5);
        expect(wrapper.findAll('.p-menuitem-text')[0].text()).toBe('File');
    });

    it('should hide menu', async () => {
        const hide = vi.spyOn(wrapper.vm, 'hide');

        await wrapper.setData({ visible: true });

        wrapper.vm.hide();
        await wrapper.setData({ visible: false });

        expect(hide).toHaveBeenCalled();
        expect(wrapper.find('.p-contextmenu.p-component').exists()).toBe(false);
    });
});

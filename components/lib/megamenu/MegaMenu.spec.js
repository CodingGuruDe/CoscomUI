import { mount } from '@vue/test-utils';
import MegaMenu from './MegaMenu.vue';

describe('MegaMenu.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(MegaMenu, {
            global: {
                stubs: {
                    'router-link': true
                }
            },
            props: {
                model: [
                    {
                        label: 'Videos',
                        icon: 'cs el-fw pi-video',
                        items: [
                            [
                                {
                                    label: 'Video 1',
                                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                                },
                                {
                                    label: 'Video 2',
                                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                                }
                            ]
                        ]
                    },
                    {
                        label: 'Users',
                        icon: 'cs el-fw pi-users',
                        items: [
                            [
                                {
                                    label: 'User 1',
                                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                                }
                            ],
                            [
                                {
                                    label: 'User 2',
                                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                                },
                                {
                                    label: 'User 3',
                                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                                }
                            ]
                        ]
                    }
                ]
            }
        });
    });

    it('should exists', () => {
        expect(wrapper.find('.v-megamenu.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-megamenu-root-list').exists()).toBe(true);
        expect(wrapper.findAll('ul.v-megamenu-submenu').length).toBe(5);
        expect(wrapper.findAll('li.v-menuitem').length).toBe(12);
        expect(wrapper.findAll('li.v-menuitem')[0].findAll('span.v-menuitem-text')[0].text()).toBe('Videos');
        expect(wrapper.findAll('li.v-megamenu-submenu-header')[0].text()).toBe('Video 1');
        expect(wrapper.findAll('li.v-menuitem')[1].findAll('span.v-menuitem-text')[0].text()).toBe('Video 1.1');
    });

    it('should select item', async () => {
        const firstItem = wrapper.findAll('li.v-menuitem')[0];

        await firstItem.find('.v-menuitem-content').trigger('click');

        expect(firstItem.classes()).toContain('v-menuitem-active');
    });

    it('should deselect item', async () => {
        const firstItem = wrapper.findAll('li.v-menuitem')[0];
        const firstItemContent = firstItem.find('.v-menuitem-content');

        await firstItemContent.trigger('click');
        await firstItemContent.trigger('click');

        expect(firstItem.classes()).not.toContain('v-menuitem-active');
    });

    it('should orientation work', async () => {
        await wrapper.setProps({ orientation: 'vertical' });

        expect(wrapper.find('.v-megamenu-vertical').exists()).toBe(true);
    });
});

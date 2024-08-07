import { mount } from '@vue/test-utils';
import SpeedDial from './SpeedDial.vue';

describe('SpeedDial.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(SpeedDial, {
            props: {
                model: [
                    {
                        label: 'Add',
                        icon: 'cs el-pencil'
                    },
                    {
                        label: 'Update',
                        icon: 'cs el-refresh'
                    },
                    {
                        label: 'Delete',
                        icon: 'cs el-trash'
                    },
                    {
                        label: 'Upload',
                        icon: 'cs el-upload',
                        command: () => {
                            window.location.hash = '/fileupload';
                        }
                    },
                    {
                        label: 'Vue Website',
                        icon: 'cs el-external-link',
                        command: () => {
                            window.location.href = 'https://vuejs.org/';
                        }
                    }
                ],
                direction: 'down'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-speeddial.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-speeddial').classes()).toContain('v-speeddial-direction-down');
        expect(wrapper.findAll('li.v-speeddial-item').length).toEqual(5);
    });

    it('should show the list', async () => {
        await wrapper.vm.onClick({});

        expect(wrapper.emitted()['click'][0]).toEqual([{}]);
        expect(wrapper.emitted()['show'][0]).toEqual([]);
        expect(wrapper.find('.v-speeddial').classes()).toContain('v-speeddial-opened');
        expect(wrapper.findAll('li.v-speeddial-item')[0].attributes().style).toBe('transition-delay: 0ms;');
    });

    it('should hide the list', async () => {
        await wrapper.setProps({ visible: true });

        await wrapper.vm.onClick({});

        expect(wrapper.find('.v-speeddial').classes()).not.toContain('v-speeddial-opened');
        expect(wrapper.findAll('li.v-speeddial-item')[wrapper.findAll('li.v-speeddial-item').length - 1].attributes().style).toBe('transition-delay: 0ms;');
    });

    it('should have radius and type', async () => {
        await wrapper.setProps({ radius: 80, direction: 'left', type: 'semi-circle' });

        expect(wrapper.find('.v-speeddial').classes()).toContain('v-speeddial-semi-circle');
        expect(wrapper.find('.v-speeddial').classes()).toContain('v-speeddial-direction-left');
    });

    it('should transition delay', async () => {
        await wrapper.setProps({ transitionDelay: 80 });

        expect(wrapper.findAll('li.v-speeddial-item')[wrapper.findAll('li.v-speeddial-item').length - 2].attributes().style).toBe('transition-delay: 80ms;');
    });

    it('should have hide icon', async () => {
        await wrapper.setProps({ showIcon: 'cs el-bars', hideIcon: 'cs el-times' });

        const button = wrapper.find('.v-speeddial-button');

        expect(button.find('span').classes()).toContain('el-bars');

        expect(button.find('span').classes()).not.toContain('el-times');
    });

    it('should have mask', async () => {
        await wrapper.setProps({ mask: true });

        expect(wrapper.find('.v-speeddial-mask').exists()).toBe(true);
    });
});

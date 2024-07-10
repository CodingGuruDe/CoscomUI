import { mount } from '@vue/test-utils';
import Panel from './Panel.vue';

describe('Panel.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Panel, {
            props: {
                header: 'CoscomUI'
            },
            slots: {
                default: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-panel.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-panel-content').text()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt');
        expect(wrapper.find('.v-panel-title').text()).toBe('CoscomUI');
    });

    it('should be toggleable', async () => {
        await wrapper.setProps({ toggleable: true });

        expect(wrapper.find('.v-panel.v-component').classes()).toContain('v-panel-toggleable');

        await wrapper.vm.toggle({});

        expect(wrapper.emitted().toggle[0]).toEqual([{ originalEvent: {}, value: true }]);
    });
});

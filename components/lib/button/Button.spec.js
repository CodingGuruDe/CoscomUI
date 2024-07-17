import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Button from './Button.vue';

describe('Button.vue', () => {
    it('is Button element exist', () => {
        const wrapper = mount(Button);

        expect(wrapper.find('.v-button.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-button-label').exists()).toBe(true);
    });
});

describe('Button.vue', () => {
    it('is icon exist and right position', () => {
        const icon = 'cs el-discord';
        const iconPos = 'right';
        const label = 'Save';
        const props = { icon, iconPos };
        let wrapper;

        wrapper = mount(Button, {
            props
        });

        expect(wrapper.find('.v-button-icon-only').exists()).toBe(true);

        wrapper = mount(Button, {
            props: { ...props, label }
        });

        expect(wrapper.find('.v-button-icon.v-button-icon-' + iconPos).exists()).toBe(true);
    });
});

describe('Button.vue', () => {
    it('is badge working', () => {
        const badge = '5';
        const badgeClass = 'v-badge-danger';
        const wrapper = mount(Button, {
            props: { badge, badgeClass }
        });

        expect(wrapper.find('.v-badge').text()).toEqual(badge);
        expect(wrapper.find('.' + badgeClass).exists()).toBe(true);
    });
});

describe('Button.vue', () => {
    it('is loading working', async () => {
        const loadingIcon = 'cs el-discord';
        const wrapper = mount(Button, {
            props: {
                loading: false,
                loadingIcon
            }
        });

        expect(wrapper.find('.v-disabled').exists()).toBe(false);

        await wrapper.setProps({ loading: true });
        const array = loadingIcon.split(' ');
        const lastIcon = '.' + array.join('.');

        expect(wrapper.find('.v-button-loading').exists()).toBe(true);
        expect(wrapper.find('.v-button-loading-icon' + lastIcon).exists()).toBe(true);

        await wrapper.setProps({ loading: false });

        expect(wrapper.find('.v-button-loading').exists()).toBe(false);
    });
});

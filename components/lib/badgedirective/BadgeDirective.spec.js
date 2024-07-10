import { mount } from '@vue/test-utils';
import BadgeDirective from './BadgeDirective';

describe('directive badge should exist', () => {
    it('positioned badge', () => {
        const wrapper = mount({
            template: '<i class="cs el-bell mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>',
            directives: {
                badge: BadgeDirective
            }
        });

        expect(wrapper.find('.v-overlay-badge').exists()).toBe(true);
        expect(wrapper.find('.v-badge.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-badge.v-component').text()).toBe('2');
    });
});

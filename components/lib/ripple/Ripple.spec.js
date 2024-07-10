import { config, mount } from '@vue/test-utils';
import Ripple from './Ripple';

config.global.mocks = {
    $coscom: {
        config: {
            ripple: true
        }
    }
};

config.global.directives = {
    Ripple
};

describe('Ripple', () => {
    it('should exist', async () => {
        const wrapper = mount({
            template: `
                <div class="card v-ripple" v-ripple>Default</div>
            `
        });

        const card = wrapper.find('.card');

        expect(wrapper.find('.v-ink').exists()).toBe(true);

        await card.trigger('mousedown');

        expect(wrapper.find('.v-ink').classes()).toContain('v-ink-active');
    });
});

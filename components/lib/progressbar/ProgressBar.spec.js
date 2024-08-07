import { mount } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';

describe('ProgressBar.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ProgressBar, {
            props: {
                value: 0
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-progressbar.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-progressbar').attributes()['aria-valuemin']).toBe('0');
        expect(wrapper.find('.v-progressbar').attributes()['aria-valuemax']).toBe('100');
    });

    it('should value work', async () => {
        await wrapper.setProps({ value: 10 });

        expect(wrapper.find('.v-progressbar').attributes()['aria-valuenow']).toBe('10');
        expect(wrapper.find('.v-progressbar-label').text()).toBe('10%');
    });

    it('should not show value', async () => {
        await wrapper.setProps({ showValue: false });

        expect(wrapper.find('.v-progressbar-label').exists()).toBe(false);
    });

    it('should be indeterminated', async () => {
        await wrapper.setProps({ mode: 'indeterminate' });

        expect(wrapper.find('.v-progressbar-indeterminate-container').exists()).toBe(true);
    });
});

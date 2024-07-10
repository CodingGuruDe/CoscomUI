import { mount } from '@vue/test-utils';
import ProgressSpinner from './ProgressSpinner.vue';

describe('ProgressSpinner.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ProgressSpinner, {
            props: {
                strokeWidth: '8',
                fill: 'green',
                animationDuration: '.5s'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-progress-spinner').exists()).toBe(true);
        expect(wrapper.find('svg.v-progress-spinner-svg').exists()).toBe(true);
        expect(wrapper.find('svg.v-progress-spinner-svg').attributes().style).toBe('animation-duration: .5s;');
        expect(wrapper.find('circle.v-progress-spinner-circle').attributes().fill).toBe('green');
        expect(wrapper.find('circle.v-progress-spinner-circle').attributes().strokeMiterlimit).toBe('10');
    });
});

import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import Image from './Image.vue';

describe('Image.vue', () => {
    it('should exist', () => {
        const wrapper = mount(Image, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                src: 'images/galleria/galleria1.jpg'
            }
        });

        expect(wrapper.find('.v-image.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-image.v-component img').attributes().src).toBe('images/galleria/galleria1.jpg');
    });

    it('should preview', async () => {
        const wrapper = mount(Image, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                src: 'images/galleria/galleria1.jpg',
                preview: true
            }
        });

        expect(wrapper.find('.v-image-preview-container').exists()).toBe(true);
        expect(wrapper.find('.v-image-preview-indicator').exists()).toBe(true);
        expect(wrapper.find('.v-image-mask').exists()).toBe(false);

        await wrapper.setData({ maskVisible: true });

        expect(wrapper.find('.v-image-mask').exists()).toBe(true);
        expect(wrapper.find('.v-image-toolbar').exists()).toBe(true);
    });
});

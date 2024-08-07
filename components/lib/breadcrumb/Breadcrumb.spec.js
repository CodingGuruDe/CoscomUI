import { mount } from '@vue/test-utils';
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

describe('Breadcrumb', () => {
    it('should exist', () => {
        const wrapper = mount(Breadcrumb, {
            global: {
                stubs: {
                    'router-link': true
                },
                components: {
                    BreadcrumbItem
                },
                mocks: {
                    $router: {
                        currentRoute: {
                            path: vi.fn()
                        }
                    }
                }
            },
            props: {
                home: { icon: 'cs el-home', to: '/' },
                model: [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }]
            }
        });

        expect(wrapper.find('.v-breadcrumb.v-component').exists()).toBe(true);
        expect(wrapper.findAll('.v-menuitem-separator').length).toBe(5);
        expect(wrapper.findAll('.v-menuitem-text').length).toBe(5);
    });
});

import { mount } from '@vue/test-utils';
import TabPanel from '../tabpanel/TabPanel.vue';
import Tab from './Tab.vue';

describe('TabPanel.vue', () => {
    let wrapper;

    window.HTMLElement.prototype.scrollIntoView = function () {};

    beforeEach(() => {
        wrapper = mount(Tab, {
            global: {
                components: {
                    TabPanel
                }
            },
            slots: {
                default: `
                    <TabPanel header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </TabPanel>
                    <TabPanel header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                    </TabPanel>
                    <TabPanel header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p>
                    </TabPanel>
                `
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-tab.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-tab-ink-bar').exists()).toBe(true);
        expect(wrapper.findAll('a.v-tab-nav-link').length).toBe(3);
        expect(wrapper.findAll('.v-tab-panel').length).toBe(3);
        expect(wrapper.findAll('li[role="presentation"]')[0].classes()).toContain('v-highlight');
        expect(wrapper.findAll('.v-tab-panel')[1].attributes().style).toBe('display: none;');
    });

    it('should change the active item', async () => {
        await wrapper.vm.onTabClick({}, 1);

        expect(wrapper.findAll('li[role="presentation"]')[1].classes()).toContain('v-tab-header');
        expect(wrapper.findAll('.v-tab-panel')[0].attributes().style).toBe('display: none;');
    });
});

describe('dynamic tabs', () => {
    it('should exist', () => {
        const wrapper = mount(Tab, {
            global: {
                components: {
                    TabPanel
                }
            },
            slots: {
                default: `
                    <TabPanel v-for="tab in Array.from({ length: 5 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))" :key="tab.title" :header="tab.title">
                        <p>{{tab.content}}</p>
                    </TabPanel>
                `
            }
        });

        expect(wrapper.find('.v-tab.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-tab-ink-bar').exists()).toBe(true);
        expect(wrapper.findAll('a.v-tab-nav-link').length).toBe(5);
        expect(wrapper.findAll('.v-tab-panel').length).toBe(5);
        expect(wrapper.findAll('li[role="presentation"]')[0].classes()).toContain('v-highlight');
        expect(wrapper.findAll('.v-tab-panel')[1].attributes().style).toBe('display: none;');
    });
});

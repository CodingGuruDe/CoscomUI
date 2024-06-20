import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import CascadeSelect from './CascadeSelect.vue';

describe('CascadeSelect.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(CascadeSelect, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                modelValue: null,
                options: [
                    {
                        name: 'Croatia',
                        code: 'HR',
                        states: [
                            {
                                name: 'Dalmatia',
                                cities: [
                                    { cname: 'Split', code: 'ST' },
                                    { cname: 'Zadar', code: 'ZD' }
                                ]
                            },
                            {
                                name: 'Istrien',
                                cities: [
                                    { cname: 'Pula', code: 'PU' },
                                    { cname: 'Rovinj', code: 'RO' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Germany',
                        code: 'DE',
                        states: [
                            {
                                name: 'Bayern',
                                cities: [
                                    { cname: 'Munich', code: 'M' },
                                    { cname: 'Ebersberg', code: 'EBE' },
                                    { cname: 'Wasserburg am Inn', code: 'WS' }
                                ]
                            },
                            {
                                name: 'Queensland',
                                cities: [
                                    { cname: 'Brisbane', code: 'A-BR' },
                                    { cname: 'Townsville', code: 'A-TO' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'United States',
                        code: 'US',
                        states: [
                            {
                                name: 'California',
                                cities: [
                                    { cname: 'Los Angeles', code: 'US-LA' },
                                    { cname: 'San Diego', code: 'US-SD' },
                                    { cname: 'San Francisco', code: 'US-SF' }
                                ]
                            },
                            {
                                name: 'Florida',
                                cities: [
                                    { cname: 'Jacksonville', code: 'US-JA' },
                                    { cname: 'Miami', code: 'US-MI' },
                                    { cname: 'Tampa', code: 'US-TA' },
                                    { cname: 'Orlando', code: 'US-OR' }
                                ]
                            },
                            {
                                name: 'Texas',
                                cities: [
                                    { cname: 'Austin', code: 'US-AU' },
                                    { cname: 'Dallas', code: 'US-DA' },
                                    { cname: 'Houston', code: 'US-HO' }
                                ]
                            }
                        ]
                    }
                ],
                optionLabel: 'cname',
                optionGroupLabel: 'name',
                optionGroupChildren: ['states', 'cities']
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-cascadeselect.p-component').exists()).toBe(true);
    });

    it('should show list and sublist', async () => {
        expect(wrapper.find('.p-cascadeselect.p-component').exists()).toBe(true);

        await wrapper.trigger('click');

        expect(wrapper.find('.p-cascadeselect-panel.p-cascadeselect-items').exists()).toBe(true);
        expect(wrapper.findAll('.p-cascadeselect-item').length).toBe(3);
        expect(wrapper.findAll('.p-cascadeselect-item-text')[0].text()).toBe('Croatia');

        const firstGroup = wrapper.findAll('.p-cascadeselect-item-content')[0];

        await firstGroup.trigger('click');

        expect(wrapper.find('.p-cascadeselect-panel.p-cascadeselect-sublist').exists()).toBe(true);

        const sublist = wrapper.find('.p-cascadeselect-panel.p-cascadeselect-sublist');

        expect(sublist.findAll('.p-cascadeselect-item.p-cascadeselect-item-group').length).toBe(2);
        expect(sublist.findAll('.p-cascadeselect-item-text')[0].text()).toBe('Dalmatia');
    });

    it('should accept custom icons', async () => {
        wrapper.setProps({
            dropdownIcon: 'cs el-discord',
            optionGroupIcon: 'cs el-bell'
        });

        await nextTick();

        expect(wrapper.find('.p-cascadeselect-trigger-icon').classes()).toContain('el-discord');

        await wrapper.trigger('click');

        expect(wrapper.find('.p-cascadeselect-group-icon').classes()).toContain('el-bell');
    });
});

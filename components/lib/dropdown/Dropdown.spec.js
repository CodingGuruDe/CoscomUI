import { mount } from '@vue/test-utils';
import CoscomUI from '@coscom/coscom-ui/config';
import { h } from 'vue';
import Dropdown from './Dropdown.vue';

describe('Dropdown.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            }
        });

        await wrapper.trigger('click');
    });

    it('should Dropdown exist', () => {
        expect(wrapper.find('.p-dropdown.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-panel').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-empty-message').exists()).toBe(true);
        expect(wrapper.find('.p-inputwrapper-filled').exists()).toBe(false);
        expect(wrapper.find('.p-inputwrapper-focus').exists()).toBe(true);
    });
});

describe('option checks', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                options: [
                    { name: 'Zagreb', code: 'ZG' },
                    { name: 'Ebersberg', code: 'EBE' },
                    { name: 'Munich', code: 'M' },
                    { name: 'London', code: 'LDN' },
                    { name: 'Paris', code: 'PRS' },
                    { name: 'New York', code: 'NY' }
                ],
                optionLabel: 'name',
                optionValue: 'code',
                placeholder: 'Select a City'
            }
        });

        await wrapper.trigger('click');
    });

    it('should show the options', () => {
        expect(wrapper.find('.p-dropdown-label.p-placeholder').text()).toBe('Select a City');
        expect(wrapper.find('.p-dropdown-items-wrapper > .p-dropdown-items').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-item').exists()).toBe(true);
        expect(wrapper.findAll('.p-dropdown-item').length).toBe(5);
        expect(wrapper.findAll('.p-dropdown-item')[0].text()).toBe('Zagreb');
    });
});

describe('clear checks', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                clearIcon: 'cs el-discord',
                modelValue: 'value',
                showClear: true
            }
        });

        await wrapper.trigger('click');
    });

    it('should have correct icon', () => {
        expect(wrapper.find('.p-dropdown-clear-icon').classes()).toContain('el-discord');
    });

    it('should clear with delete key', async () => {
        const updateModelSpy = vi.spyOn(wrapper.vm, 'updateModel');

        await wrapper.find('.p-dropdown-label.p-inputtext').trigger('keydown', { code: 'Delete' });
        expect(updateModelSpy).toHaveBeenCalledOnce();
        expect(updateModelSpy).toHaveBeenCalledWith(expect.any(KeyboardEvent), null);
    });
});

describe('editable checks', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                options: [
                    { name: 'Zagreb', code: 'ZG' },
                    { name: 'Ebersberg', code: 'EBE' },
                    { name: 'Munich', code: 'M' },
                    { name: 'London', code: 'LDN' },
                    { name: 'Paris', code: 'PRS' },
                    { name: 'New York', code: 'NY' }
                ],
                optionLabel: 'name',
                optionValue: 'code',
                placeholder: 'Select a City',
                editable: true
            }
        });

        await wrapper.trigger('click');
    });

    it('should show the options', () => {
        expect(wrapper.find('.p-dropdown-label.p-placeholder').exists()).toBe(false);
        expect(wrapper.find('.p-dropdown-label.p-inputtext').exists()).toBe(true);
    });
});

describe('option groups checks', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                options: [
                    {
                        label: 'Croatia',
                        code: 'HR',
                        items: [
                            { label: 'Zagreb', value: 'Zagreb' },
                            { label: 'Split', value: 'Split' },
                            { label: 'Rijeka', value: 'Rijeka' },
                            { label: 'Osijek', value: 'Osijek' }
                        ]
                    },
                    {
                        label: 'Germany',
                        code: 'DE',
                        items: [
                            { label: 'Berlin', value: 'Berlin' },
                            { label: 'Frankfurt', value: 'Frankfurt' },
                            { label: 'Hamburg', value: 'Hamburg' },
                            { label: 'Munich', value: 'Munich' }
                        ]
                    },
                    {
                        label: 'USA',
                        code: 'US',
                        items: [
                            { label: 'Chicago', value: 'Chicago' },
                            { label: 'Los Angeles', value: 'Los Angeles' },
                            { label: 'New York', value: 'New York' },
                            { label: 'San Francisco', value: 'San Francisco' }
                        ]
                    }
                ],
                optionLabel: 'label',
                optionGroupLabel: 'label',
                optionGroupChildren: 'items'
            }
        });

        await wrapper.trigger('click');
    });

    it('should show the option groups', () => {
        expect(wrapper.findAll('.p-dropdown-item-group').length).toBe(3);
        expect(wrapper.findAll('.p-dropdown-item-group')[0].text()).toBe('Croatia');
    });
});

describe('templating checks', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            slots: {
                header: h('span', { class: 'header-slot' }, 'Header slot'),
                footer: h('span', { class: 'footer-slot' }, 'Footer slot'),
                option: h('span', { class: 'option-slot' }, 'Option slot'),
                optiongroup: h('span', { class: 'optiongroup-slot' }, 'OptionGroup slot'),
                emptyfilter: h('span', { class: 'emptyfilter-slot' }, 'Empty filter slot')
            },
            props: {
                options: [
                    {
                        label: 'Germany',
                        code: 'DE',
                        items: [
                            { label: 'Berlin', value: 'Berlin' },
                            { label: 'Frankfurt', value: 'Frankfurt' },
                            { label: 'Hamburg', value: 'Hamburg' },
                            { label: 'Munich', value: 'Munich' }
                        ]
                    }
                ],
                optionLabel: 'label',
                optionGroupLabel: 'label',
                optionGroupChildren: 'items'
            }
        });

        await wrapper.trigger('click');
    });

    it('should see header and footer slots', () => {
        expect(wrapper.find('.header-slot').exists()).toBe(true);
        expect(wrapper.find('.header-slot').text()).toBe('Header slot');
        expect(wrapper.find('.footer-slot').exists()).toBe(true);
        expect(wrapper.find('.footer-slot').text()).toBe('Footer slot');
        expect(wrapper.find('.option-slot').exists()).toBe(true);
        expect(wrapper.find('.option-slot').text()).toBe('Option slot');
        expect(wrapper.find('.optiongroup-slot').exists()).toBe(true);
        expect(wrapper.find('.optiongroup-slot').text()).toBe('OptionGroup slot');
    });
});

describe('empty templating checks', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                options: [],
                optionLabel: 'label',
                optionGroupLabel: 'label',
                optionGroupChildren: 'items',
                emptyMessage: 'Need options prop',
                filterValue: 'xd'
            }
        });

        await wrapper.trigger('click');
    });

    it('should see empty slots', () => {
        expect(wrapper.find('.p-dropdown-empty-message').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-empty-message').text()).toBe('Need options prop');
    });
});

describe('loader checks', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                loading: true,
                loadingIcon: 'cs el-discord',
                options: [
                    { name: 'Zagreb', code: 'ZG' },
                    { name: 'Ebersberg', code: 'EBE' },
                    { name: 'Munich', code: 'M' },
                    { name: 'London', code: 'LDN' },
                    { name: 'Paris', code: 'PRS' },
                    { name: 'New York', code: 'NY' }
                ],
                optionLabel: 'name',
                optionValue: 'code',
                placeholder: 'Select a City'
            }
        });

        await wrapper.trigger('click');
    });

    it('should show the loader', async () => {
        expect(wrapper.find('.p-dropdown-trigger-icon').classes()).toContain('el-discord');

        await wrapper.setProps({ loading: false });

        expect(wrapper.find('.p-dropdown-trigger-icon').classes()).not.toContain('el-discord');
    });
});

describe('filter checks', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [CoscomUI],
                stubs: {
                    teleport: true
                }
            },
            props: {
                filter: true,
                filterIcon: 'cs el-discord',
                options: [
                    { name: 'Australia', code: 'AU' },
                    { name: 'Brazil', code: 'BR' },
                    { name: 'China', code: 'CN' },
                    { name: 'Egypt', code: 'EG' },
                    { name: 'France', code: 'FR' },
                    { name: 'Germany', code: 'DE' },
                    { name: 'Croatia', code: 'HR' },
                    { name: 'Japan', code: 'JP' },
                    { name: 'Spain', code: 'ES' },
                    { name: 'United States', code: 'US' }
                ],
                optionLabel: 'name'
            }
        });

        await wrapper.trigger('click');
    });

    it('should make filtering', async () => {
        const filterInput = wrapper.find('.p-dropdown-filter');
        const filterIcon = wrapper.find('.p-dropdown-filter-icon');

        expect(filterInput.exists()).toBe(true);
        expect(filterIcon.classes()).toContain('el-discord');

        const event = { target: { value: 'c' } };
        const onFilterChange = vi.spyOn(wrapper.vm, 'onFilterChange');

        wrapper.vm.onFilterChange(event);
        await wrapper.vm.$nextTick();

        expect(onFilterChange).toHaveBeenCalled();

        await wrapper.setData({ filterValue: 'c' });

        expect(wrapper.findAll('.p-dropdown-item').length).toBe(2);
    });
});

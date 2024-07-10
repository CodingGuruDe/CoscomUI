import { mount } from '@vue/test-utils';
import CoscomUI from 'coscom/config';
import Paginator from './Paginator.vue';

describe('Paginator.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Paginator, {
            global: {
                plugins: [CoscomUI]
            },
            props: {
                rows: 10,
                totalRecords: 120,
                rowsPerPageOptions: [10, 20, 30]
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.v-paginator.v-component').exists()).toBe(true);
        expect(wrapper.findAll('.v-paginator-page.v-paginator-element').length).toBe(5);
        expect(wrapper.find('.v-dropdown.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-dropdown-label').text()).toBe('10');
        expect(wrapper.find('.v-paginator-first').classes()).toContain('v-disabled');
        expect(wrapper.find('.v-paginator-prev').classes()).toContain('v-disabled');
        expect(wrapper.vm.pageCount).toBe(12);
    });

    it('show jump to the end', async () => {
        await wrapper.vm.changePageToLast({ preventDefault: () => {} });

        expect(wrapper.findAll('.v-paginator-page.v-paginator-element')[4].classes()).toContain('v-highlight');
        expect(wrapper.findAll('.v-paginator-page.v-paginator-element')[4].text()).toBe('12');
        expect(wrapper.find('.v-paginator-next').classes()).toContain('v-disabled');
        expect(wrapper.find('.v-paginator-last').classes()).toContain('v-disabled');
    });

    it('should change row count', async () => {
        await wrapper.vm.onRowChange(20);

        expect(wrapper.vm.d_rows).toBe(20);
        expect(wrapper.emitted()['update:rows'][0]).toEqual([20]);
        expect(wrapper.vm.pageCount).toBe(6);

        await wrapper.setProps({ rows: 20 });

        expect(wrapper.find('.v-dropdown-label').text()).toBe('20');
    });
});

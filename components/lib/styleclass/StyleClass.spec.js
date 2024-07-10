import { config, mount } from '@vue/test-utils';
import Button from '@coscom/coscom-ui/button';
import InputText from '@coscom/coscom-ui/inputtext';
import StyleClass from './StyleClass';

config.global.directives = {
    styleclass: StyleClass
};

describe('StyleClass', () => {
    it('should work with next selector', async () => {
        const wrapper = mount({
            template: `
                <Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'v-disabled' }" />
                <InputText class="block mt-3" />
            `,
            components: {
                Button,
                InputText
            }
        });

        const button = wrapper.find('.v-button');
        const input = wrapper.find('.v-inputtext');

        expect(input.classes()).not.toContain('v-disabled');

        await button.trigger('click');

        expect(input.classes()).toContain('v-disabled');

        await button.trigger('click');

        expect(input.classes()).not.toContain('v-disabled');
    });
});

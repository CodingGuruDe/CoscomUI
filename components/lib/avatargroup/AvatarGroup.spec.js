import { mount } from '@vue/test-utils';
import Avatar from '../avatar/Avatar.vue';
import AvatarGroup from './AvatarGroup.vue';

describe('AvatarGroup.vue', () => {
    it('should exist', () => {
        const wrapper = mount(AvatarGroup, {
            global: {
                components: {
                    Avatar
                }
            },
            slots: {
                default: '<Avatar icon="cs el-user" size="xlarge" shape="circle" />'
            }
        });

        expect(wrapper.find('.v-avatar-group.v-component').exists()).toBe(true);
        expect(wrapper.find('.v-avatar.v-component').exists()).toBe(true);
    });
});

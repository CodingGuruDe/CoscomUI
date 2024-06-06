<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Avatar from '@coscom/coscom-ui/avatar';
import AvatarGroup from '@coscom/coscom-ui/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>

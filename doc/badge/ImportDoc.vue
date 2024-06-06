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
// import as component
import Badge from '@coscom/coscom-ui/badge';

// import as directive
import BadgeDirective from '@coscom/coscom-ui/badgedirective';

app.directive('badge', BadgeDirective);
`
            }
        };
    }
};
</script>

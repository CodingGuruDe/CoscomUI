<template>
    <DocSectionText v-bind="$attrs">
        <p>Constants API is available to reference icons easily when used programmatically.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
import { CoscomIcons } from '@coscom/coscom-ui/api';

export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    items: [
                        { label: 'New', icon: CoscomIcons.PLUS },
                        { label: 'Open', icon: CoscomIcons.DOWNLOAD }
                    ]
                }
            ],
            code: {
                basic: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script>
import { CoscomIcons } from '@coscom/coscom-ui/api';

export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    items: [
                        { label: 'New', icon: CoscomIcons.PLUS },
                        { label: 'Open', icon: CoscomIcons.DOWNLOAD }
                    ]
                }
            ]
        };
    }
};
<\/script>
`
            }
        };
    }
};
</script>

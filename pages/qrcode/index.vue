<template>
    <DocComponent title="Vue ProgressSpinner Component" header="QrCode" description="ProgressBar is a process status indicator." :componentDocs="docs" :apiDocs="['ProgressSpinner']" :themingDocs="themingDoc" />
    qr codeee
</template>

<script>
import BasicDoc from '@/doc/qrcode/BasicDoc.vue';
import ImportDoc from '@/doc/qrcode/ImportDoc.vue';
import ThemingDoc from '@/doc/qrcode/theming/index.vue';
export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                }
            ],
            themingDoc: ThemingDoc
        };
    }
};
</script>

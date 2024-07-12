<template>
    <DocSectionText v-bind="$attrs">
        <p>QrCodes can be generated using a list of values.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <QrCode :text="value" />
            <InputText v-model="value" :maxlength="60" type="text" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 'The rain dampened the sky',
            code: {
                basic: `
<Card>
    <v-qrcode :value="text" />
    <v-input v-model:value="text" :maxlength="60" type="text" />
</Card>

`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div>
                <v-qrcode :value="text" />
                <v-input v-model:value="text" :maxlength="60" type="text" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'The rain dampened the sky',
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div>
                <v-qrcode :value="text" />
                <v-input v-model:value="text" :maxlength="60" type="text" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('The rain dampened the sky');
<\/script>
`
            }
        };
    }
};
</script>

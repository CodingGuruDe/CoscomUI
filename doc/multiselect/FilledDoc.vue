<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" variant="filled" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
            cities: [
                { name: 'Wasserburg am Inn', code: 'WS' },
                { name: 'Ebersberg', code: 'EBE' },
                { name: 'Munich', code: 'M' },
                { name: 'Zagreb', code: 'ZG' },
                { name: 'Zadar', code: 'ZD' }
            ],
            code: {
                basic: `
<MultiSelect v-model="selectedCities" variant="filled" :options="cities" optionLabel="name" placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-20rem" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" variant="filled" :options="cities" optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
            cities: [
                { name: 'Wasserburg am Inn', code: 'WS' },
                { name: 'Ebersberg', code: 'EBE' },
                { name: 'Munich', code: 'M' },
                { name: 'Zagreb', code: 'ZG' },
                { name: 'Zadar', code: 'ZD' }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" variant="filled" :options="cities" optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'Wasserburg am Inn', code: 'WS' },
    { name: 'Ebersberg', code: 'EBE' },
    { name: 'Munich', code: 'M' },
    { name: 'Zagreb', code: 'ZG' },
    { name: 'Zadar', code: 'ZD' }
]);
<\/script>
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <NuxtLink to="/floatlabel">FloatLabel</NuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <FloatLabel class="w-full md:w-20rem">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full" />
            <label for="ms-cities">MultiSelect</label>
        </FloatLabel>
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
<FloatLabel class="w-full md:w-20rem">
    <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full" />
    <label for="ms-cities">MultiSelect</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <FloatLabel class="w-full md:w-20rem">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full" />
            <label for="ms-cities">MultiSelect</label>
        </FloatLabel>
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
        <FloatLabel class="w-full md:w-20rem">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full" />
            <label for="ms-cities">MultiSelect</label>
        </FloatLabel>
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

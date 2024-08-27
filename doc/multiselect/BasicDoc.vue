<template>
    <DocSectionText v-bind="$attrs">
        <p>
            MultiSelect is used as a controlled component with <i>v-model</i> property along with an <i>options</i> collection. Label and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i> properties respectively. Note
            that, when options are simple primitive values such as a string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" />
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
<MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-20rem" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"  
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
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
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

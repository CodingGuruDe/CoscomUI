<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Options can be grouped when a nested data structures is provided. To define the label of a group <i>optionGroupLabel</i> property is needed and also <i>optionGroupChildren</i> is required to define the property that refers to the children
            of a group.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-20rem">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="@/assets/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </MultiSelect>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
            groupedCities: [
                {
                    label: 'Germany',
                    code: 'DE',
                    items: [
                        { label: 'Wasserburg am Inn', value: 'Wasserburg am Inn' },
                        { label: 'Ebersberg', value: 'Ebersberg' },
                        { label: 'Grafing', value: 'Grafing' },
                        { label: 'Munich', value: 'Munich' }
                    ]
                },
                {
                    label: 'Croatia',
                    code: 'HR',
                    items: [
                        { label: 'Zagreb', value: 'Zagreb' },
                        { label: 'Split', value: 'Split' },
                        { label: 'Osijek', value: 'Osijek' },
                        { label: 'Zadar', value: 'Zadar' }
                    ]
                },
                {
                    label: 'USA',
                    code: 'US',
                    items: [
                        { label: 'Chicago', value: 'Chicago' },
                        { label: 'Los Angeles', value: 'Los Angeles' },
                        { label: 'New York', value: 'New York' },
                        { label: 'San Francisco', value: 'San Francisco' }
                    ]
                }
            ],
            code: {
                basic: `
<MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-20rem">
    <template #optiongroup="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.label" src="@/assets/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.label }}</div>
        </div>
    </template>
</MultiSelect>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-20rem">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="@/assets/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
            groupedCities: [
                {
                    label: 'Germany',
                    code: 'DE',
                    items: [
                        { label: 'Wasserburg am Inn', value: 'Wasserburg am Inn' },
                        { label: 'Ebersberg', value: 'Ebersberg' },
                        { label: 'Grafing', value: 'Grafing' },
                        { label: 'Munich', value: 'Munich' }
                    ]
                },
                {
                    label: 'Croatia',
                    code: 'HR',
                    items: [
                        { label: 'Zagreb', value: 'Zagreb' },
                        { label: 'Split', value: 'Split' },
                        { label: 'Osijek', value: 'Osijek' },
                        { label: 'Zadar', value: 'Zadar' }
                    ]
                },
                {
                    label: 'USA',
                    code: 'US',
                    items: [
                        { label: 'Chicago', value: 'Chicago' },
                        { label: 'Los Angeles', value: 'Los Angeles' },
                        { label: 'New York', value: 'New York' },
                        { label: 'San Francisco', value: 'San Francisco' }
                    ]
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-20rem">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="@/assets/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const groupedCities = ref([
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Wasserburg am Inn', value: 'Wasserburg am Inn' },
            { label: 'Ebersberg', value: 'Ebersberg' },
            { label: 'Grafing', value: 'Grafing' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'Croatia',
        code: 'HR',
        items: [
            { label: 'Zagreb', value: 'Zagreb' },
            { label: 'Split', value: 'Split' },
            { label: 'Osijek', value: 'Osijek' },
            { label: 'Zadar', value: 'Zadar' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    }
]);
<\/script>
`
            }
        };
    }
};
</script>

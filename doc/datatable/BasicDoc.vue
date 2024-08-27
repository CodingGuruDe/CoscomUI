<template>
    <DocSectionText v-bind="$attrs">
        <p>DataTable requires a <i>value</i> as data to display and <i>Column</i> components as children for the representation.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="machines" tableStyle="min-width: 50rem">
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="controlunit" header="Control Unit"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['MachineService']" hideStackBlitz hideCodeSandbox />
</template>

<script>
import { MachineService } from '@/service/MachineService';

export default {
    data() {
        return {
            machines: null,
            code: {
                basic: `
<DataTable :value="machines" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="controlUnit" header="Control Unit"></Column>
    <Column field="inventoryStatus" header="Status"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="machines" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="controlUnit" header="Control Unit"></Column>
            <Column field="inventoryStatus" header="Status"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { MachineService } from '@/service/MachineService';

export default {
    data() {
        return {
            machines: null
        };
    },
    mounted() {
        MachineService.getMachinesMini().then((data) => (this.machines = data));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="machines" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="controlUnit" header="Control Unit"></Column>
            <Column field="inventoryStatus" header="Status"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { MachineService } from '@/service/MachineService';

onMounted(() => {
    MachineService.getMachinesMini().then((data) => (machines.value = data));
});

const products = ref();

<\/script>
`,
                data: `
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Heller MCH 280',
    description: 'Horizontales Bearbeitungszentrum MCH 280 C mit Schwenkkopfeinheit bietet mehr Bearbeitungsflexibilität',
    image: 'bamboo-watch.jpg',
    controlUnit: 'Celos mit Siemens 840D sl Operate',
    category: 'Industry',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `
            }
        };
    },
    methods: {
        loadDemoData() {
            MachineService.getMachinesMini().then((data) => (this.machines = data));
        }
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Columns can be created programmatically. Below is an example with orders</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="orders" tableStyle="min-width: 50rem">
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['OrderService']" hideStackBlitz hideCodeSandbox />
</template>

<script>
import { OrderService } from '@/service/OrderService';

export default {
    data() {
        return {
            orders: null,
            columns: null,
            code: {
                basic: `
<DataTable :value="orders" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="orders" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script>
import { OrderService } from '@/service/OrderService';

export default {
    data() {
        return {
            orders: null,
            columns: null
        };
    },
    created() {
        this.columns = [
            { field: 'ProductOrderID', header: 'ProductOrderID' },
            { field: 'PlantID', header: 'PlantID' },
            { field: 'MachineID', header: 'MachineID' },
            { field: 'ToolCirculationOrderType.Description', header: 'ToolCirculationOrderType' },
            { field: 'ToolCirculationOrderStatus.StatusDescription', header: 'ToolCirculationOrderStatus' }
        ];
    },
    mounted() {
        OrderService.getOrders().then((data) => (this.orders = data));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="orders" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { OrderService } from '@/service/OrderService';

onMounted(() => {
    OrderService.getOrders().then((data) => (orders.value = data));
});

const orders = ref();
const columns = [
    { field: 'ProductOrderID', header: 'ProductOrderID' },
    { field: 'PlantID', header: 'PlantID' },
    { field: 'MachineID', header: 'MachineID' },
    { field: 'ToolCirculationOrderType.Description', header: 'ToolCirculationOrderType' },
    { field: 'ToolCirculationOrderStatus.StatusDescription', header: 'ToolCirculationOrderStatus' }
];

<\/script>
`,
                data: `
{
    ProductOrderID: 'COS_EBE_DMC125FD_08092_01',
    PlantID: 'COS',
    MachineID: 'DMC125FD_08092_02',
    ToolCirculationOrderType.Description: 'Voreinstellauftrag',
    ToolCirculationOrderStatus.StatusDescription: 'Auf Verfügbarkeit geprüft',
},
...
        `
            }
        };
    },
    created() {
        this.columns = [
            { field: 'ProductOrderID', header: 'ProductOrderID' },
            { field: 'PlantID', header: 'PlantID' },
            { field: 'MachineID', header: 'MachineID' },
            { field: 'ToolCirculationOrderType.Description', header: 'ToolCirculationOrderType' },
            { field: 'ToolCirculationOrderStatus.StatusDescription', header: 'ToolCirculationOrderStatus' }
        ];
    },
    methods: {
        loadDemoData() {
            OrderService.getOrders().then((data) => (this.orders = data));
        }
    }
};
</script>

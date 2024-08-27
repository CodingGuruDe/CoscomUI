<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content at <i>header</i> and <i>footer</i> sections are supported via templating.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="orders" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                        <span class="text-xl text-900 font-bold">Orders</span>
                        <Button icon="cs el-refresh" rounded raised />
                    </div>
                </template>
                <Column field="ProductOrderID" header="ProductOrderID"></Column>
                <Column header="Status">
                    <template #body="slotProps">
                        <img :src="`../../../images/status/status-${slotProps.data.ToolCirculationOrderStatus.StatusID}.png`" :alt="slotProps.data.StatusID" class="w-6rem" />
                    </template>
                </Column>
                <Column field="PlantID" header="PlantID"></Column>
                <Column field="MachineID" header="MachineID"></Column>
                <Column header="Quantity">
                    <template #body="slotProps">
                        <Button :label="slotProps.data.ToolCirculationOrderStatus.StatusDescription" :type="getType(slotProps.data)" />
                    </template>
                </Column>
                <template #footer> In total there are {{ orders ? orders.length : 0 }} orders. </template>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['OrderService']" hideCodeSandbox />
</template>

<script>
import { OrderService } from '@/service/OrderService';

export default {
    data() {
        return {
            orders: null,
            code: {
                basic: `
<DataTable :value="orders" tableStyle="min-width: 50rem">
    <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">Products</span>
            <Button icon="cs el-refresh" rounded raised />
        </div>
    </template>
    <Column field="ProductOrderID" header="ProductOrderID"></Column>
    <Column header="Status">
        <template #body="slotProps">
            <img :src="\`../../../images/status/\${slotProps.data.ToolCirculationOrderStatus.StatusID}.png\`" :alt="slotProps.data.StatusID" class="w-6rem" />
        </template>
    </Column>
    <Column field="PlantID" header="PlantID"></Column>
    <Column field="MachineID" header="MachineID"></Column>
    <Column header="Quantity">
        <template #body="slotProps">
            <Button :label="slotProps.data.ToolCirculationOrderStatus.StatusDescription" :type="getType(slotProps.data)" />
        </template>
    </Column>
    <template #footer> In total there are {{ orders ? orders.length : 0 }} orders. </template>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="orders" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Products</span>
                    <Button icon="cs el-refresh" rounded raised />
                </div>
            </template>
            <Column field="ProductOrderID" header="ProductOrderID"></Column>
            <Column header="Status">
                <template #body="slotProps">
                    <img :src="\`../../../images/status/\${slotProps.data.ToolCirculationOrderStatus.StatusID}.png\`" :alt="slotProps.data.StatusID" class="w-6rem" />
                </template>
            </Column>
            <Column field="PlantID" header="PlantID"></Column>
            <Column field="MachineID" header="MachineID"></Column>
            <Column header="Quantity">
                <template #body="slotProps">
                    <Button :label="slotProps.data.ToolCirculationOrderStatus.StatusDescription" :type="getType(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ orders ? orders.length : 0 }} orders. </template>
        </DataTable>
    </div>
</template>

<script>
import { OrderService } from '@/service/OrderService';

export default {
    data() {
        return {
            orders: null
        };
    },
    mounted() {
        OrderService.getOrders().then((data) => (this.orders = data));
    },
    methods: {
        getType(order) {
            switch (order.StatusID) {
                case 1:
                    return 'warning';

                case 2:
                    return 'info';

                case 3:
                    return 'secondary';

                case 4:
                    return 'success';

                case 5:
                    return 'primary';

                case 6:
                    return 'info';

                case 7:
                    return 'success';

                case 8:
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="orders" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Products</span>
                    <Button icon="cs el-refresh" rounded raised />
                </div>
            </template>
            <Column field="ProductOrderID" header="ProductOrderID"></Column>
            <Column header="Status">
                <template #body="slotProps">
                    <img :src="\`../../../images/status/\${slotProps.data.ToolCirculationOrderStatus.StatusID}.png\`" :alt="slotProps.data.StatusID" class="w-6rem" />
                </template>
            </Column>
            <Column field="PlantID" header="PlantID"></Column>
            <Column field="MachineID" header="MachineID"></Column>
            <Column header="Quantity">
                <template #body="slotProps">
                    <Button :label="slotProps.data.ToolCirculationOrderStatus.StatusDescription" :type="getType(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ orders ? orders.length : 0 }} orders. </template>
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
const getType = (order) => {
    switch (order.StatusID) {
            case 1:
                return 'warning';

            case 2:
                return 'info';

            case 3:
                return 'secondary';

            case 4:
                return 'success';

            case 5:
                return 'primary';

            case 6:
                return 'info';

            case 7:
                return 'success';

            case 8:
                return 'danger';

            default:
                return null;
        }
    }
};

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
    methods: {
        loadDemoData() {
            OrderService.getOrders().then((data) => (this.orders = data));
        },
        getType(order) {
            switch (order.StatusID) {
                case 1:
                    return 'warning';

                case 2:
                    return 'info';

                case 3:
                    return 'secondary';

                case 4:
                    return 'success';

                case 5:
                    return 'primary';

                case 6:
                    return 'info';

                case 7:
                    return 'success';

                case 8:
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
</script>

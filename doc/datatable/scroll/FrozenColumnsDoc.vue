<template>
    <DocSectionText v-bind="$attrs">
        <p>A column can be fixed during horizontal scrolling by enabling the <i>frozen</i> property. The location is defined with the <i>alignFrozen</i> that can be <i>left</i> or <i>right</i>.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <Button v-model="balanceFrozen" type="secondary" :icon="!isActive ? 'cs el-lock' : 'cs el-lock-open'" @click="toggleState()" label="Balance" :data-v-checked="isActive" />

            <DataTable :value="customers" scrollable scrollHeight="400px" class="mt-4">
                <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
                <Column field="id" header="Id" style="min-width: 100px"></Column>
                <Column field="name" header="Name" style="min-width: 200px"></Column>
                <Column field="country.name" header="Country" style="min-width: 200px"></Column>
                <Column field="date" header="Date" style="min-width: 200px"></Column>
                <Column field="company" header="Company" style="min-width: 200px"></Column>
                <Column field="status" header="Status" style="min-width: 200px"></Column>
                <Column field="activity" header="Activity" style="min-width: 200px"></Column>
                <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
                <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
                    <template #body="{ data }">
                        <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['CustomerService']" hideCodeSandbox />
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            balanceFrozen: false,
            isActive: false,
            code: {
                basic: `
<Button v-model="balanceFrozen" type="secondary" :icon="!isActive ? 'cs el-lock' : 'cs el-lock-open'" @click="toggleState()" label="Balance" :data-v-checked="isActive" />
<DataTable :value="customers" scrollable scrollHeight="400px" class="mt-4">
    <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
    <Column field="id" header="Id" style="min-width: 100px"></Column>
    <Column field="name" header="Name" style="min-width: 200px"></Column>
    <Column field="country.name" header="Country" style="min-width: 200px"></Column>
    <Column field="date" header="Date" style="min-width: 200px"></Column>
    <Column field="company" header="Company" style="min-width: 200px"></Column>
    <Column field="status" header="Status" style="min-width: 200px"></Column>
    <Column field="activity" header="Activity" style="min-width: 200px"></Column>
    <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
    <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
        <template #body="{ data }">
            <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <Button v-model="balanceFrozen" type="secondary" :icon="!isActive ? 'cs el-lock' : 'cs el-lock-open'" @click="toggleState()" label="Balance" :data-v-checked="isActive" />

        <DataTable :value="customers" scrollable scrollHeight="400px" class="mt-4">
            <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
            <Column field="id" header="Id" style="min-width: 100px"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country.name" header="Country" style="min-width: 200px"></Column>
            <Column field="date" header="Date" style="min-width: 200px"></Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 200px"></Column>
            <Column field="activity" header="Activity" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
            <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
                <template #body="{ data }">
                    <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            balanceFrozen: false,
            isActive: false,
        };
    },
    mounted() {
        CustomerService.getCustomersLarge().then((data) => {
            this.customers = data;
        });
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        toggleState() {
            this.isActive = !this.isActive;
            this.balanceFrozen = !this.balanceFrozen;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Button v-model="balanceFrozen" type="secondary" :icon="!isActive ? 'cs el-lock' : 'cs el-lock-open'" @click="toggleState()" label="Balance" :data-v-checked="isActive" />

        <DataTable :value="customers" scrollable scrollHeight="400px" class="mt-4">
            <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
            <Column field="id" header="Id" style="min-width: 100px"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country.name" header="Country" style="min-width: 200px"></Column>
            <Column field="date" header="Date" style="min-width: 200px"></Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 200px"></Column>
            <Column field="activity" header="Activity" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
            <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
                <template #body="{ data }">
                    <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    CustomerService.getCustomersLarge().then((data) => {
        customers.value = data;
    });
});

const customers = ref();
const balanceFrozen = ref(false);
const isActive = ref(false);
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const toggleState = () => {
    isActive.value = !isActive.value;
    balanceFrozen.value = !balanceFrozen.value;
}   
<\/script>
`,
                data: `
{
    id: 1000,
    name: 'Max Musterman',
    country: {
        name: 'Germany',
        code: 'de'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`
            }
        };
    },
    methods: {
        loadDemoData() {
            CustomerService.getCustomersLarge().then((data) => {
                this.customers = data;
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        toggleState() {
            this.isActive = !this.isActive;
            this.balanceFrozen = !this.balanceFrozen;
        }
    }
};
</script>

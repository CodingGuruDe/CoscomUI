<template>
    <DocSectionText v-bind="$attrs">
        <p>In addition to a regular table, alternatives with alternative sizes are available.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="flex justify-content-center mb-4">
                <Dropdown v-model="size" :options="sizeOptions" optionLabel="label" placeholder="Select a City" class="w-full md:w-14rem" />
            </div>
            <DataTable :value="products" :size="size.value" tableStyle="min-width: 50rem">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['ProductService']" hideStackBlitz hideCodeSandbox />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            size: { label: 'Normal', value: 'null' },
            sizeOptions: [
                { label: 'Small', value: 'small' },
                { label: 'Normal', value: 'null' },
                { label: 'Large', value: 'large' }
            ],
            code: {
                basic: `
<DataTable :value="products" :size="size.value" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="inventoryStatus" header="Status"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            {{size}}
        </div>
        <DataTable :value="products" :size="size.value" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="inventoryStatus" header="Status"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            size: { label: 'Normal', value: 'null' },
            sizeOptions: [
                { label: 'Small', value: 'small' },
                { label: 'Normal', value: 'null' },
                { label: 'Large', value: 'large' }
            ]
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :size="size.value" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const size = ref({ label: 'Normal', value: 'null' });
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'null' },
    { label: 'Large', value: 'large' }
]);

<\/script>
`,
                data: `
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'COSCOM Montagearbeitsplatz',
    description: 'Product Description',
    image: '',
    price: 65,
    category: 'Orders Management,
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
            ProductService.getProductsMini().then((data) => (this.products = data));
        }
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Data filtering is enabled by defining the <i>filters</i> property referring to a <i>DataTableFilterMeta</i> instance. Each column to filter also requires <i>filter</i> to be enabled. Built-in filter element is a input field and using
            <i>filterElement</i>, it is possible to customize the filtering with your own UI. Filter elements are display within a separe row when <i>filterDisplay</i> is defined as <i>row</i>.
        </p>
        <p>The optional global filtering searches the data against a single value that is bound to the <i>global</i> key of the <i>filters</i> object. The fields to search against is defined with the <i>globalFilterFields</i>.</p>
    </DocSectionText>

    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading" :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
            <template #header>
                <div class="flex justify-content-end">
                    <InputIcon>
                        <i class="cs el-search" />
                    </InputIcon>
                    <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="v-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="@/assets/images/flag/flag_placeholder.png" :class="`flag flag-${returnCountryCode(data.country.name)}`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="v-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="data.representative.image" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="v-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="`${slotProps.option.representative.image}`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.status }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="v-column-filter" style="min-width: 12rem" :showClear="true">
                        <template #option="slotProps">
                            {{ slotProps.option }}
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                <template #body="{ data }">
                    <i class="cs" :class="{ 'el-check-circle text-green-500': data.verified, 'el-times-circle text-red-400': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Checkbox v-model="filterModel.value" inputId="transfer1" name="transfer" value="Sending" @change="filterCallback()" />
                </template>
            </Column>
        </DataTable>
    </div>

    <DocSectionCode :code="code" :service="['CustomerService']" hideCodeSandbox />
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode } from '@coscom/coscom-ui/api';

export default {
    data() {
        return {
            customers: null,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                status: { value: null, matchMode: FilterMatchMode.EQUALS },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            },
            representatives: [],
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
            loading: true,
            code: {
                basic: `
<DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading"
        :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
    <template #header>
        <div class="flex justify-content-end">
            <IconField iconPosition="left">
                <InputIcon>
                    <i class="cs el-search" />
                </InputIcon>
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </IconField>
        </div>
    </template>
    <template #empty> No customers found. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="name" header="Name" style="min-width: 12rem">
        <template #body="{ data }">
            {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="v-column-filter" placeholder="Search by name" />
        </template>
    </Column>
    <Column header="Country" filterField="country.name" style="min-width: 12rem">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img alt="flag" src="@/assets/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="v-column-filter" placeholder="Search by country" />
        </template>
    </Column>
    <Column header="Agent" filterField="representative" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img :alt="data.representative.name" :src="\`@/assets/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="v-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                <template #option="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img :alt="slotProps.option.name" :src="\`@/assets/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
        </template>
    </Column>
    <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
        <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="v-column-filter" style="min-width: 12rem" :showClear="true">
                <template #option="slotProps">
                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
            </Dropdown>
        </template>
    </Column>
    <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
        <template #body="{ data }">
            <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading"
                :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
            <template #header>
                <div class="flex justify-content-end">
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="cs el-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="v-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="@/assets/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="v-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`@/assets/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="v-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`@/assets/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="v-column-filter" style="min-width: 12rem" :showClear="true">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                <template #body="{ data }">
                    <i class="cs" :class="{ 'el-check-circle text-green-500': data.verified, 'el-times-circle text-red-400': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { FilterMatchMode } from '@coscom/coscom-ui/api';
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                status: { value: null, matchMode: FilterMatchMode.EQUALS },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            },
            representatives: [],
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
            loading: true
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = this.getCustomers(data);
            this.representatives = [];
            this.loading = false;
        });
    },
    methods: {
        getCustomers(data) {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        },
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading"
                :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
            <template #header>
                <div class="flex justify-content-end">
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="cs el-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="v-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="@/assets/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="v-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`@/assets/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="v-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`@/assets/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="v-column-filter" style="min-width: 12rem" :showClear="true">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                <template #body="{ data }">
                    <i class="cs" :class="{ 'el-check-circle text-green-500': data.verified, 'el-times-circle text-red-400': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from '@coscom/coscom-ui/api';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const representatives = ref([]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
            customers.value = getCustomers(data);
            representatives.value = data;
            loading.value = false;
        });
});

const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};
const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

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
    company: 'Coscom GmbH',
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
...`
            }
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = this.getCustomers(data);
            this.representatives = data;
            this.loading = false;
        });
    },
    methods: {
        getCustomers(data) {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        },
        returnCountryCode(code) {
            if (code === 'Germany') return 'de';
            else if (code === 'Croatia') return 'hr';
            else if (code === 'Austria') return 'at';
            else return 'ch';
        },
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>removableSort</i> is present, the third click removes the sorting from the column.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <TreeTable :value="nodes" sortMode="multiple" removableSort>
                <Column field="name" header="Name" sortable expander></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            code: {
                basic: `
<TreeTable :value="nodes" sortMode="multiple" removableSort>
    <Column field="name" header="Name" sortable expander></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable :value="nodes" sortMode="multiple" removableSort>
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TreeTable :value="nodes" sortMode="multiple" removableSort>
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
<\/script>
`,
                data: `
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'cs el-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'cs el-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'cs el-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'cs el-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'cs el-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'cs el-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`
            }
        };
    },
    methods: {
        loadDemoData() {
            NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
        }
    }
};
</script>

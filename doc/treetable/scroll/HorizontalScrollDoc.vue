<template>
    <DocSectionText v-bind="$attrs">
        <p>Horizontal scrolling is enabled when the total width of columns exceeds table width.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <TreeTable :value="nodes" scrollable scrollHeight="300px" scrollDirection="both">
                <Column field="name" header="Name" expander style="width: 250px"></Column>
                <Column field="size" header="Size" style="width: 250px"></Column>
                <Column field="type" header="Type 2" style="width: 250px"></Column>
                <Column field="size" header="Size 2" style="width: 250px"></Column>
                <Column field="type" header="Type 3" style="width: 250px"></Column>
                <Column field="size" header="Size 3" style="width: 250px"></Column>
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
<TreeTable :value="nodes" scrollable scrollHeight="300px" scrollDirection="both">
    <Column field="name" header="Name" expander style="width: 250px"></Column>
    <Column field="size" header="Size" style="width: 250px"></Column>
    <Column field="type" header="Type 2" style="width: 250px"></Column>
    <Column field="size" header="Size 2" style="width: 250px"></Column>
    <Column field="type" header="Type 3" style="width: 250px"></Column>
    <Column field="size" header="Size 3" style="width: 250px"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable :value="nodes" scrollable scrollHeight="300px" scrollDirection="both">
            <Column field="name" header="Name" expander style="width: 250px"></Column>
            <Column field="size" header="Size" style="width: 250px"></Column>
            <Column field="type" header="Type 2" style="width: 250px"></Column>
            <Column field="size" header="Size 2" style="width: 250px"></Column>
            <Column field="type" header="Type 3" style="width: 250px"></Column>
            <Column field="size" header="Size 3" style="width: 250px"></Column>
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
        <TreeTable :value="nodes" scrollable scrollHeight="300px" scrollDirection="both">
            <Column field="name" header="Name" expander style="width: 250px"></Column>
            <Column field="size" header="Size" style="width: 250px"></Column>
            <Column field="type" header="Type 2" style="width: 250px"></Column>
            <Column field="size" header="Size 2" style="width: 250px"></Column>
            <Column field="type" header="Type 3" style="width: 250px"></Column>
            <Column field="size" header="Size 3" style="width: 250px"></Column>
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

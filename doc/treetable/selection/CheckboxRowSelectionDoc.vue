<template>
    <DocSectionText v-bind="$attrs">
        <p>Selection of multiple nodes via checkboxes is enabled by configuring <i>selectionMode</i> as <i>checkbox</i>.</p>
        <p>
            In checkbox selection mode, value binding should be a key-value pair where key (or the dataKey) is the node key and value is an object that has <i>checked</i> and <i>partialChecked</i> properties to represent the checked state of a node.
        </p>
    </DocSectionText>
    <DocSectionCode :code="introCode" hideToggleCode importCode hideStackBlitz />
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
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
            selectedKey: null,
            introCode: {
                basic: `
{
    '0-0': {
        partialChecked: false,
        checked: true
    }
}
`
            },
            code: {
                basic: `
<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: null
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
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
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
const selectedKey = ref();
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

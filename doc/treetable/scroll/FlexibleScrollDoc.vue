<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport
            adjusts itself according to the size changes.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card flex justify-content-center">
            <Button label="Show" icon="cs el-external-link" @click="dialogVisible = true" />

            <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
                <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                    <Column field="name" header="Name" :expander="true" style="min-width: 200px"></Column>
                    <Column field="size" header="Size" style="min-width: 200px"></Column>
                    <Column field="type" header="Type" style="min-width: 200px"></Column>
                </TreeTable>
                <template #footer>
                    <Button label="Ok" icon="cs el-check" @click="dialogVisible = false" />
                </template>
            </Dialog>
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
            dialogVisible: false,
            code: {
                basic: `
<Button label="Show" icon="cs el-external-link" @click="dialogVisible = true" />
<Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
    <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
        <Column field="name" header="Name" :expander="true" style="min-width: 200px"></Column>
        <Column field="size" header="Size" style="min-width: 200px"></Column>
        <Column field="type" header="Type" style="min-width: 200px"></Column>
    </TreeTable>
    <template #footer>
        <Button label="Ok" icon="cs el-check" @click="dialogVisible = false" />
    </template>
</Dialog>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="cs el-external-link" @click="dialogVisible = true" />
        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                <Column field="name" header="Name" :expander="true" style="min-width: 200px"></Column>
                <Column field="size" header="Size" style="min-width: 200px"></Column>
                <Column field="type" header="Type" style="min-width: 200px"></Column>
            </TreeTable>
            <template #footer>
                <Button label="Ok" icon="cs el-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            dialogVisible: false
        };
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="cs el-external-link" @click="dialogVisible = true" />
        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                <Column field="name" header="Name" :expander="true" style="min-width: 200px"></Column>
                <Column field="size" header="Size" style="min-width: 200px"></Column>
                <Column field="type" header="Type" style="min-width: 200px"></Column>
            </TreeTable>
            <template #footer>
                <Button label="Ok" icon="cs el-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
});

const nodes = ref();
const dialogVisible = ref(false);

<\/script>
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>TabMenu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card">
        <TabMenu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Dashboard', icon: 'cs el-home' },
                { label: 'Transactions', icon: 'cs el-chart-line' },
                { label: 'Products', icon: 'cs el-list' },
                { label: 'Messages', icon: 'cs el-inbox' }
            ],
            code: {
                basic: `
<TabMenu :model="items" />
`,
                options: `
<template>
    <div class="card">
        <TabMenu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Dashboard', icon: 'cs el-home' },
                { label: 'Transactions', icon: 'cs el-chart-line' },
                { label: 'Products', icon: 'cs el-list' },
                { label: 'Messages', icon: 'cs el-inbox' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TabMenu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'Dashboard', icon: 'cs el-home' },
    { label: 'Transactions', icon: 'cs el-chart-line' },
    { label: 'Products', icon: 'cs el-list' },
    { label: 'Messages', icon: 'cs el-inbox' }
]);
<\/script>
`
            }
        };
    }
};
</script>

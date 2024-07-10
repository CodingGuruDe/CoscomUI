<template>
    <DocSectionText v-bind="$attrs">
        <p>Menu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'New', icon: 'cs el-plus' },
                { label: 'Search', icon: 'cs el-search' }
            ],
            code: {
                basic: `
<Menu :model="items" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'New', icon: 'cs el-plus' },
                { label: 'Search', icon: 'cs el-search' }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'New', icon: 'cs el-plus' },
    { label: 'Search', icon: 'cs el-search' }
]);
<\/script>
`
            }
        };
    }
};
</script>

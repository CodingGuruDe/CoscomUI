<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content can be placed inside the items using the <i>item</i> template. The divider between the items has its own <i>separator</i> template.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer" :href="item.url">
                    <span :class="item.icon"></span>
                </a>
            </template>
            <template #separator> / </template>
        </Breadcrumb>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            home: { icon: 'cs el-home' },
            items: [{ icon: 'cs el-sitemap' }, { icon: 'cs el-book' }, { icon: 'cs el-wallet' }, { icon: 'cs el-shopping-bag' }, { icon: 'cs el-calculator' }],
            code: {
                basic: `
<Breadcrumb :home="home" :model="items">
    <template #item="{ item }">
        <a class="cursor-pointer" :href="item.url">
            <span :class="item.icon"></span>
        </a>
    </template>
    <template #separator> / </template>
</Breadcrumb>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer" :href="item.url">
                    <span :class="item.icon"></span>
                </a>
            </template>
            <template #separator> / </template>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: { icon: 'cs el-home' },
            items: [{ icon: 'cs el-sitemap' }, { icon: 'cs el-book' }, { icon: 'cs el-wallet' }, { icon: 'cs el-shopping-bag' }, { icon: 'cs el-calculator' }]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer" :href="item.url">
                    <span :class="item.icon"></span>
                </a>
            </template>
            <template #separator> / </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({ icon: 'cs el-home' });
const items = ref([{ icon: 'cs el-sitemap' }, { icon: 'cs el-book' }, { icon: 'cs el-wallet' }, { icon: 'cs el-shopping-bag' }, { icon: 'cs el-calculator' }]);
<\/script>
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Toolbar provides <i>start</i>, <i>center</i> and <i>end</i> properties to place content at these sections.</p>
    </DocSectionText>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button icon="cs el-plus" class="mr-2" severity="secondary" />
                <Button icon="cs el-print" class="mr-2" severity="secondary" />
                <Button icon="cs el-upload" severity="secondary" />
            </template>

            <template #center>
                <IconField iconPosition="left">
                    <InputIcon>
                        <i class="cs el-search" />
                    </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
            </template>

            <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
        </Toolbar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'cs el-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'cs el-times'
                }
            ],
            code: {
                basic: `
<Toolbar>
    <template #start>
        <Button icon="cs el-plus" class="mr-2" severity="secondary" />
        <Button icon="cs el-print" class="mr-2" severity="secondary" />
        <Button icon="cs el-upload" severity="secondary" />
    </template>

    <template #center>
        <IconField iconPosition="left">
            <InputIcon>
                <i class="cs el-search" />
            </InputIcon>
            <InputText placeholder="Search" />
        </IconField>
    </template>

    <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
</Toolbar>
`,
                options: `
<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button icon="cs el-plus" class="mr-2" severity="secondary" />
                <Button icon="cs el-print" class="mr-2" severity="secondary" />
                <Button icon="cs el-upload" severity="secondary" />
            </template>

            <template #center>
                <IconField iconPosition="left">
                    <InputIcon>
                        <i class="cs el-search" />
                    </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
            </template>

            <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
        </Toolbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'cs el-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'cs el-times'
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button icon="cs el-plus" class="mr-2" severity="secondary" />
                <Button icon="cs el-print" class="mr-2" severity="secondary" />
                <Button icon="cs el-upload" severity="secondary" />
            </template>

            <template #center>
                <IconField iconPosition="left">
                    <InputIcon>
                        <i class="cs el-search" />
                    </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
            </template>

            <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
        </Toolbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: 'Update',
        icon: 'cs el-refresh'
    },
    {
        label: 'Delete',
        icon: 'cs el-times'
    }
])
<\/script>
`
            }
        };
    }
};
</script>

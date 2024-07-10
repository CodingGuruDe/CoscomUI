<template>
    <DocSectionText v-bind="$attrs">
        <p>SplitButton provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.</p>
    </DocSectionText>
    <div class="card flex align-items-center justify-content-center flex-wrap gap-3">
        <SplitButton label="Save" :model="items" icon="cs el-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="cs el-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="cs el-plus" size="large"></SplitButton>
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
                    icon: 'cs el-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'cs el-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'cs el-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'cs el-upload', to: '/fileupload' }
            ],
            code: {
                basic: `
<SplitButton label="Save" :model="items" icon="cs el-plus" size="small"></SplitButton>
<SplitButton label="Save" :model="items" icon="cs el-plus"></SplitButton>
<SplitButton label="Save" :model="items" icon="cs el-plus" size="large"></SplitButton>
`,
                options: `
<template>
    <div class="card flex align-items-center justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="cs el-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="cs el-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="cs el-plus" size="large"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'cs el-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'cs el-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'cs el-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'cs el-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex align-items-center justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="cs el-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="cs el-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="cs el-plus" size="large"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "@coscom/coscom-ui/usetoast";
const toast = useToast();

const items = [
{
    label: 'Update',
    icon: 'cs el-refresh',
    command: () => {
        toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
    }
},
{
    label: 'Delete',
    icon: 'cs el-times',
    command: () => {
        toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
    }
},
{
    label: 'Vue Website',
    icon: 'cs el-external-link',
    command: () => {
        window.location.href = 'https://vuejs.org/';
    }
},
{ label: 'Upload', icon: 'cs el-upload', to: '/fileupload' }];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
</script>

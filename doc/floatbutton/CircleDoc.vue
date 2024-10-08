<template>
    <DocSectionText v-bind="$attrs">
        <p>Items can be displayed around the button when <i>type</i> is set to <i>circle</i>. Additional <i>radius</i> property defines the radius of the circle.</p>
    </DocSectionText>
    <div class="card">
        <div :style="{ height: '500px' }" class="flex align-items-center justify-content-center">
            <FloatButton :model="items" :radius="80" type="circle" buttonClass="v-button-warning" />
        </div>
    </div>
    <DocSectionCode :code="code" hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'cs el-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'cs el-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'cs el-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'cs el-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'cs el-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ],
            code: {
                basic: `
<FloatButton :model="items" :radius="80" type="circle" buttonClass="v-button-warning" />
`,
                options: `
<template>
    <div class="card">
        <div :style="{ height: '500px' }" class="flex align-items-center justify-content-center">
            <FloatButton :model="items" :radius="80" type="circle" buttonClass="v-button-warning" />
            <Toast />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'cs el-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'cs el-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'cs el-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'cs el-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'cs el-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ]
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div :style="{ height: '500px' }" class="flex align-items-center justify-content-center">
            <FloatButton :model="items" :radius="80" type="circle" buttonClass="p-button-warning" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from '@coscom/coscom-ui/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'cs el-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'cs el-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'cs el-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'cs el=> {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'cs el-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Items display a tooltip on hover when a standalone <NuxtLink to="/tooltip">Tooltip</NuxtLink> is present with a target that matches the items.</p>
    </DocSectionText>
    <div class="card">
        <div :style="{ position: 'relative', height: '350px' }">
            <FloatButton :model="items" direction="up" class="right-0 bottom-0" buttonClass="v-button-help" :tooltipOptions="{ position: 'left' }" />
            <FloatButton :model="items" direction="up" class="left-0 bottom-0" buttonClass="v-button-danger" :tooltipOptions="{ position: 'right' }" />
        </div>
    </div>
    <DocSectionCode :code="code" />
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
<FloatButton :model="items" direction="up" class="right-0 bottom-0" buttonClass="v-button-help" :tooltipOptions="{ position: 'left' }" />
<FloatButton :model="items" direction="up" class="left-0 bottom-0" buttonClass="v-button-danger" :tooltipOptions="{ position: 'right' }" />
`,
                options: `
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '350px' }">
            <FloatButton :model="items" direction="up" class="right-0 bottom-0" buttonClass="v-button-help" :tooltipOptions="{ position: 'left' }" />
            <FloatButton :model="items" direction="up" class="left-0 bottom-0" buttonClass="v-button-danger" :tooltipOptions="{ position: 'right' }" />
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
        <div :style="{ position: 'relative', height: '350px' }">
            <FloatButton :model="items" direction="up" class="right-0 bottom-0" buttonClass="p-button-help" :tooltipOptions="{ position: 'left' }" />
            <FloatButton :model="items" direction="up" class="left-0 bottom-0" buttonClass="p-button-danger" :tooltipOptions="{ position: 'right' }" />
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
        icon: 'cs el-upload',
        command: () => {
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

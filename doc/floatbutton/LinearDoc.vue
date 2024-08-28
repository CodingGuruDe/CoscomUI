<template>
    <DocSectionText v-bind="$attrs">
        <p>
            FloatButton component can be used as a floating action button. This provides an application with a main point of action. Floating action buttons can be attached to material to signify a promoted action in your application. The default
            size will be used in most cases, whereas the small variant can be used to maintain continuity with similar sized elements.
        </p>
    </DocSectionText>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <FloatButton :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <FloatButton :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <FloatButton :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <FloatButton :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
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
<FloatButton :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
<FloatButton :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
<FloatButton :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
<FloatButton :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
`,
                options: `
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <FloatButton :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <FloatButton :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <FloatButton :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <FloatButton :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
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
        <div :style="{ position: 'relative', height: '500px' }">
            <FloatButton :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <FloatButton :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <FloatButton :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <FloatButton :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
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

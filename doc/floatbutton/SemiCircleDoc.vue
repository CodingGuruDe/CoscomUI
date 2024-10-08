<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>type</i> is defined as <i>semi-circle</i>, items are displayed in a half-circle around the button.</p>
    </DocSectionText>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <FloatButton :model="items" :radius="80" type="semi-circle" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <FloatButton :model="items" :radius="80" type="semi-circle" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
            <FloatButton :model="items" :radius="80" type="semi-circle" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <FloatButton :model="items" :radius="80" type="semi-circle" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
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
<FloatButton :model="items" :radius="80" type="semi-circle" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
<FloatButton :model="items" :radius="80" type="semi-circle" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
<FloatButton :model="items" :radius="80" type="semi-circle" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
<FloatButton :model="items" :radius="80" type="semi-circle" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
`,
                options: `
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <FloatButton :model="items" :radius="80" type="semi-circle" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <FloatButton :model="items" :radius="80" type="semi-circle" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
            <FloatButton :model="items" :radius="80" type="semi-circle" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <FloatButton :model="items" :radius="80" type="semi-circle" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
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
    <div class="card" :style="{ position: 'relative', height: '500px' }">
        <FloatButton :model="items" :radius="80" type="semi-circle" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
        <FloatButton :model="items" :radius="80" type="semi-circle" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
        <FloatButton :model="items" :radius="80" type="semi-circle" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
        <FloatButton :model="items" :radius="80" type="semi-circle" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
        <Toast />
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>SpeedDial items are defined with the <i>model</i> property based on MenuModel API. Default orientation of the items is linear and <i>direction</i> property is used to define the position of the items related to the button.</p>
    </DocSectionText>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
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
<SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
<SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
<SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
<SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
`,
                options: `
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
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
            <SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
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

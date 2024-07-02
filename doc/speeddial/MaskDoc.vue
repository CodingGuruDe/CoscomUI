<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding <i>mask</i> property displays a modal layer behind the popup items.</p>
    </DocSectionText>
    <div class="card p-3">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ right: '1rem', bottom: '1rem' }" />
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
<SpeedDial :model="items" direction="up" mask :style="{ right: '1rem', bottom: '1rem' }" />
`,
                options: `
<template>
    <div class="card p-3">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ right: '1rem', bottom: '1rem' }" />
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
    <div class="card p-3">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ right: '1rem', bottom: '1rem' }" />
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

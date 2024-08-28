<template>
    <DocSectionText v-bind="$attrs">
        <p>Setting <i>type</i> as <i>quarter-circle</i> displays the items at one of four corners of a button based on the <i>direction</i>.</p>
    </DocSectionText>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ right: 0, bottom: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ left: 0, bottom: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ right: 0, top: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ left: 0, top: 0 }" />
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
<FloatButton :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ right: 0, bottom: 0 }" />
<FloatButton :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ left: 0, bottom: 0 }" />
<FloatButton :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ right: 0, top: 0 }" />
<FloatButton :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ left: 0, top: 0 }" />
`,
                options: `
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ right: 0, bottom: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ left: 0, bottom: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ right: 0, top: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ left: 0, top: 0 }" />
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
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ right: 0, bottom: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ left: 0, bottom: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ right: 0, top: 0 }" />
            <FloatButton :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ left: 0, top: 0 }" />
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

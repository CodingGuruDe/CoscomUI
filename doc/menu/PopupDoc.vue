<template>
    <DocSectionText v-bind="$attrs">
        <p>Overlay mode is enabled by adding <i>popup</i> property and calling <i>toggle</i> function of the menu ref with an event of the target.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Button type="button" icon="cs el-ellipsis-v" plain @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Options',
                    items: [
                        {
                            label: 'Refresh',
                            icon: 'cs el-refresh'
                        },
                        {
                            label: 'Export',
                            icon: 'cs el-upload'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<Button type="button" icon="cs el-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
<Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="cs el-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Refresh',
                    icon: 'cs el-refresh'
                },
                {
                    label: 'Export',
                    icon: 'cs el-upload'
                }
            ]
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="cs el-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'cs el-refresh'
            },
            {
                label: 'Export',
                icon: 'cs el-upload'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
<\/script>
`
            }
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
</script>

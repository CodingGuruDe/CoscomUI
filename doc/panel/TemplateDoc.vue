<template>
    <DocSectionText v-bind="$attrs">
        <p>Header, icons and footer sections of the panel are customizable via templating.</p>
    </DocSectionText>
    <div class="card">
        <Panel toggleable>
            <template #header>
                <div class="flex align-items-center gap-2">
                    <span class="font-bold">Amy Elsner</span>
                </div>
            </template>
            <template #footer>
                <div class="flex flex-wrap align-items-center justify-content-between gap-3">
                    <div class="flex align-items-center gap-2">
                        <Button icon="cs el-user" rounded text></Button>
                        <Button icon="cs el-bookmark" severity="secondary" rounded text></Button>
                    </div>
                    <span class="p-text-secondary">Updated 2 hours ago</span>
                </div>
            </template>
            <template #icons>
                <button class="p-panel-header-icon v-link mr-2" @click="toggle">
                    <span class="cs el-cog"></span>
                </button>
                <Menu ref="menu" id="config_menu" :model="items" popup />
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
    <DocSectionCode :code="code" />
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
                    label: 'Search',
                    icon: 'cs el-search'
                },
                {
                    separator: true
                },
                {
                    label: 'Delete',
                    icon: 'cs el-times'
                }
            ],
            code: {
                basic: `
<Panel toggleable>
    <template #header>
        <div class="flex align-items-center gap-2">

            <span class="font-bold">Amy Elsner</span>
        </div>
    </template>
    <template #footer>
        <div class="flex flex-wrap align-items-center justify-content-between gap-3">
            <div class="flex align-items-center gap-2">
                <Button icon="cs el-user" rounded text></Button>
                <Button icon="cs el-bookmark" severity="secondary" rounded text></Button>
            </div>
            <span class="p-text-secondary">Updated 2 hours ago</span>
        </div>
    </template>
    <template #icons>
        <button class="p-panel-header-icon v-link mr-2" @click="toggle">
            <span class="cs el-cog"></span>
        </button>
        <Menu ref="menu" id="config_menu" :model="items" popup />
    </template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
`,
                options: `
<template>
    <div class="card">
        <Toast />
        <Panel toggleable>
            <template #header>
                <div class="flex align-items-center gap-2">

                    <span class="font-bold">Amy Elsner</span>
                </div>
            </template>
            <template #footer>
                <div class="flex flex-wrap align-items-center justify-content-between gap-3">
                    <div class="flex align-items-center gap-2">
                        <Button icon="cs el-user" rounded text></Button>
                        <Button icon="cs el-bookmark" severity="secondary" rounded text></Button>
                    </div>
                    <span class="p-text-secondary">Updated 2 hours ago</span>
                </div>
            </template>
            <template #icons>
                <button class="p-panel-header-icon v-link mr-2" @click="toggle">
                    <span class="cs el-cog"></span>
                </button>
                <Menu ref="menu" id="config_menu" :model="items" popup />
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
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
                    label: 'Search',
                    icon: 'cs el-search'
                },
                {
                    separator: true
                },
                {
                    label: 'Delete',
                    icon: 'cs el-times'
                }
            ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Toast />
        <Panel toggleable>
            <template #header>
                <div class="flex align-items-center gap-2">

                    <span class="font-bold">Amy Elsner</span>
                </div>
            </template>
            <template #footer>
                <div class="flex flex-wrap align-items-center justify-content-between gap-3">
                    <div class="flex align-items-center gap-2">
                        <Button icon="cs el-user" rounded text></Button>
                        <Button icon="cs el-bookmark" severity="secondary" rounded text></Button>
                    </div>
                    <span class="p-text-secondary">Updated 2 hours ago</span>
                </div>
            </template>
            <template #icons>
                <button class="p-panel-header-icon v-link mr-2" @click="toggle">
                    <span class="cs el-cog"></span>
                </button>
                <Menu ref="menu" id="config_menu" :model="items" popup />
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "@coscom/coscom-ui/usetoast";
import { useRouter } from 'vue-router';
import Menu from '@coscom/coscom-ui/menu';

const menu = ref(null);
const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Refresh',
        icon: 'cs el-refresh'
    },
    {
        label: 'Search',
        icon: 'cs el-search'
    },
    {
        separator: true
    },
    {
        label: 'Delete',
        icon: 'cs el-times'
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>PanelMenu offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <PanelMenu :model="items" class="w-full md:w-20rem">
            <template #item="{ item }">
                <a v-ripple class="flex align-items-center px-3 py-2 cursor-pointer">
                    <span :class="[item.icon, 'text-primary']" />
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
        </PanelMenu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Mail',
                    icon: 'cs el-envelope',
                    badge: 5,
                    items: [
                        {
                            label: 'Compose',
                            icon: 'cs el-file-edit',
                            shortcut: '⌘+N'
                        },
                        {
                            label: 'Inbox',
                            icon: 'cs el-inbox',
                            badge: 5
                        },
                        {
                            label: 'Sent',
                            icon: 'cs el-send',
                            shortcut: '⌘+S'
                        },
                        {
                            label: 'Trash',
                            icon: 'cs el-trash',
                            shortcut: '⌘+T'
                        }
                    ]
                },
                {
                    label: 'Reports',
                    icon: 'cs el-chart-bar',
                    shortcut: '⌘+R',
                    items: [
                        {
                            label: 'Sales',
                            icon: 'cs el-chart-line',
                            badge: 3
                        },
                        {
                            label: 'Products',
                            icon: 'cs el-list',
                            badge: 6
                        }
                    ]
                },
                {
                    label: 'Profile',
                    icon: 'cs el-user',
                    shortcut: '⌘+W',
                    items: [
                        {
                            label: 'Settings',
                            icon: 'cs el-cog',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Privacy',
                            icon: 'cs el-shield',
                            shortcut: '⌘+P'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<PanelMenu :model="items">
    <template #item="{ item }">
        <a v-ripple class="flex align-items-center px-3 py-2 cursor-pointer">
            <span :class="[item.icon, 'text-primary']" />
            <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
        </a>
    </template>
</PanelMenu>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <PanelMenu :model="items" class="w-full md:w-20rem">
            <template #item="{ item }">
                <a v-ripple class="flex align-items-center px-3 py-2 cursor-pointer">
                    <span :class="[item.icon, 'text-primary']" />
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
        </PanelMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Mail',
                    icon: 'cs el-envelope',
                    badge: 5,
                    items: [
                        {
                            label: 'Compose',
                            icon: 'cs el-file-edit',
                            shortcut: '⌘+N'
                        },
                        {
                            label: 'Inbox',
                            icon: 'cs el-inbox',
                            badge: 5
                        },
                        {
                            label: 'Sent',
                            icon: 'cs el-send',
                            shortcut: '⌘+S'
                        },
                        {
                            label: 'Trash',
                            icon: 'cs el-trash',
                            shortcut: '⌘+T'
                        }
                    ]
                },
                {
                    label: 'Reports',
                    icon: 'cs el-chart-bar',
                    shortcut: '⌘+R',
                    items: [
                        {
                            label: 'Sales',
                            icon: 'cs el-chart-line',
                            badge: 3
                        },
                        {
                            label: 'Products',
                            icon: 'cs el-list',
                            badge: 6
                        }
                    ]
                },
                {
                    label: 'Profile',
                    icon: 'cs el-user',
                    shortcut: '⌘+W',
                    items: [
                        {
                            label: 'Settings',
                            icon: 'cs el-cog',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Privacy',
                            icon: 'cs el-shield',
                            shortcut: '⌘+P'
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <PanelMenu :model="items" class="w-full md:w-20rem">
            <template #item="{ item }">
                <a v-ripple class="flex align-items-center px-3 py-2 cursor-pointer">
                    <span :class="[item.icon, 'text-primary']" />
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
        </PanelMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Mail',
        icon: 'cs el-envelope',
        badge: 5,
        items: [
            {
                label: 'Compose',
                icon: 'cs el-file-edit',
                shortcut: '⌘+N'
            },
            {
                label: 'Inbox',
                icon: 'cs el-inbox',
                badge: 5
            },
            {
                label: 'Sent',
                icon: 'cs el-send',
                shortcut: '⌘+S'
            },
            {
                label: 'Trash',
                icon: 'cs el-trash',
                shortcut: '⌘+T'
            }
        ]
    },
    {
        label: 'Reports',
        icon: 'cs el-chart-bar',
        shortcut: '⌘+R',
        items: [
            {
                label: 'Sales',
                icon: 'cs el-chart-line',
                badge: 3
            },
            {
                label: 'Products',
                icon: 'cs el-list',
                badge: 6
            }
        ]
    },
    {
        label: 'Profile',
        icon: 'cs el-user',
        shortcut: '⌘+W',
        items: [
            {
                label: 'Settings',
                icon: 'cs el-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Privacy',
                icon: 'cs el-shield',
                shortcut: '⌘+P'
            }
        ]
    }
]);
<\/script>
`
            }
        };
    }
};
</script>

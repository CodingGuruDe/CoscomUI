<template>
    <DocSectionText v-bind="$attrs">
        <p>TieredMenu offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <TieredMenu :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <a v-ripple class="flex align-items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" class="cs el-angle-right ml-auto"></i>
                </a>
            </template>
        </TieredMenu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'cs el-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'cs el-plus',
                            items: [
                                {
                                    label: 'Document',
                                    icon: 'cs el-file',
                                    shortcut: '⌘+N'
                                },
                                {
                                    label: 'Image',
                                    icon: 'cs el-image',
                                    shortcut: '⌘+I'
                                },
                                {
                                    label: 'Video',
                                    icon: 'cs el-video',
                                    shortcut: '⌘+L'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'cs el-folder-open',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Print',
                            icon: 'cs el-print',
                            shortcut: '⌘+P'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'cs el-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'cs el-copy',
                            shortcut: '⌘+C'
                        },
                        {
                            label: 'Delete',
                            icon: 'cs el-times',
                            shortcut: '⌘+D'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'cs el-search',
                    shortcut: '⌘+S'
                },
                {
                    separator: true
                },
                {
                    label: 'Share',
                    icon: 'cs el-share-alt',
                    items: [
                        {
                            label: 'Slack',
                            icon: 'cs el-slack',
                            badge: 2
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'cs el-whatsapp',
                            badge: 3
                        }
                    ]
                }
            ],
            code: {
                basic: `
<TieredMenu :model="items">
    <template #item="{ item, props, hasSubmenu }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" class="cs el-angle-right ml-auto"></i>
        </a>
    </template>
</TieredMenu>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <TieredMenu :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <a v-ripple class="flex align-items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" class="cs el-angle-right ml-auto"></i>
                </a>
            </template>
        </TieredMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'cs el-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'cs el-plus',
                            items: [
                                {
                                    label: 'Document',
                                    icon: 'cs el-file',
                                    shortcut: '⌘+N'
                                },
                                {
                                    label: 'Image',
                                    icon: 'cs el-image',
                                    shortcut: '⌘+I'
                                },
                                {
                                    label: 'Video',
                                    icon: 'cs el-video',
                                    shortcut: '⌘+L'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'cs el-folder-open',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Print',
                            icon: 'cs el-print',
                            shortcut: '⌘+P'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'cs el-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'cs el-copy',
                            shortcut: '⌘+C'
                        },
                        {
                            label: 'Delete',
                            icon: 'cs el-times',
                            shortcut: '⌘+D'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'cs el-search',
                    shortcut: '⌘+S'
                },
                {
                    separator: true
                },
                {
                    label: 'Share',
                    icon: 'cs el-share-alt',
                    items: [
                        {
                            label: 'Slack',
                            icon: 'cs el-slack',
                            badge: 2
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'cs el-whatsapp',
                            badge: 3
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
        <TieredMenu :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <a v-ripple class="flex align-items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" class="cs el-angle-right ml-auto"></i>
                </a>
            </template>
        </TieredMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'File',
        icon: 'cs el-file',
        items: [
            {
                label: 'New',
                icon: 'cs el-plus',
                items: [
                    {
                        label: 'Document',
                        icon: 'cs el-file',
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Image',
                        icon: 'cs el-image',
                        shortcut: '⌘+I'
                    },
                    {
                        label: 'Video',
                        icon: 'cs el-video',
                        shortcut: '⌘+L'
                    }
                ]
            },
            {
                label: 'Open',
                icon: 'cs el-folder-open',
                shortcut: '⌘+O'
            },
            {
                label: 'Print',
                icon: 'cs el-print',
                shortcut: '⌘+P'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'cs el-file-edit',
        items: [
            {
                label: 'Copy',
                icon: 'cs el-copy',
                shortcut: '⌘+C'
            },
            {
                label: 'Delete',
                icon: 'cs el-times',
                shortcut: '⌘+D'
            }
        ]
    },
    {
        label: 'Search',
        icon: 'cs el-search',
        shortcut: '⌘+S'
    },
    {
        separator: true
    },
    {
        label: 'Share',
        icon: 'cs el-share-alt',
        items: [
            {
                label: 'Slack',
                icon: 'cs el-slack',
                badge: 2
            },
            {
                label: 'Whatsapp',
                icon: 'cs el-whatsapp',
                badge: 3
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

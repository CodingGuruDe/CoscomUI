<template>
    <DocSectionText v-bind="$attrs">
        <p>TieredMenu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <TieredMenu :model="items" />
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
                                    icon: 'cs el-file'
                                },
                                {
                                    label: 'Image',
                                    icon: 'cs el-image'
                                },
                                {
                                    label: 'Video',
                                    icon: 'cs el-video'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'cs el-folder-open'
                        },
                        {
                            label: 'Print',
                            icon: 'cs el-print'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'cs el-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'cs el-copy'
                        },
                        {
                            label: 'Delete',
                            icon: 'cs el-times'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'cs el-search'
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
                            icon: 'cs el-slack'
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'cs el-whatsapp'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<TieredMenu :model="items" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <TieredMenu :model="items" />
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
                                    icon: 'cs el-file'
                                },
                                {
                                    label: 'Image',
                                    icon: 'cs el-image'
                                },
                                {
                                    label: 'Video',
                                    icon: 'cs el-video'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'cs el-folder-open'
                        },
                        {
                            label: 'Print',
                            icon: 'cs el-print'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'cs el-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'cs el-copy'
                        },
                        {
                            label: 'Delete',
                            icon: 'cs el-times'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'cs el-search'
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
                            icon: 'cs el-slack'
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'cs el-whatsapp'
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
        <TieredMenu :model="items" />
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
                        icon: 'cs el-file'
                    },
                    {
                        label: 'Image',
                        icon: 'cs el-image'
                    },
                    {
                        label: 'Video',
                        icon: 'cs el-video'
                    }
                ]
            },
            {
                label: 'Open',
                icon: 'cs el-folder-open'
            },
            {
                label: 'Print',
                icon: 'cs el-print'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'cs el-file-edit',
        items: [
            {
                label: 'Copy',
                icon: 'cs el-copy'
            },
            {
                label: 'Delete',
                icon: 'cs el-times'
            }
        ]
    },
    {
        label: 'Search',
        icon: 'cs el-search'
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
                icon: 'cs el-slack'
            },
            {
                label: 'Whatsapp',
                icon: 'cs el-whatsapp'
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

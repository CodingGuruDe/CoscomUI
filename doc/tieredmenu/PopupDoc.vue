<template>
    <DocSectionText v-bind="$attrs">
        <p>Overlay mode is enabled by adding <i>popup</i> property and calling <i>toggle</i> function of the menu ref with an event of the target.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
        <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
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
<Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
<TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
        <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
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
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
        <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
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
        }
    }
};
</script>

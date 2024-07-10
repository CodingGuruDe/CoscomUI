<template>
    <DocSectionText v-bind="$attrs">
        <p>PanelMenu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <PanelMenu :model="items" class="w-full md:w-20rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Files',
                    icon: 'cs el-file',
                    items: [
                        {
                            label: 'Documents',
                            icon: 'cs el-file',
                            items: [
                                {
                                    label: 'Invoices',
                                    icon: 'cs el-file-pdf',
                                    items: [
                                        {
                                            label: 'Pending',
                                            icon: 'cs el-stop'
                                        },
                                        {
                                            label: 'Paid',
                                            icon: 'cs el-check-circle'
                                        }
                                    ]
                                },
                                {
                                    label: 'Clients',
                                    icon: 'cs el-users'
                                }
                            ]
                        },
                        {
                            label: 'Images',
                            icon: 'cs el-image',
                            items: [
                                {
                                    label: 'Logos',
                                    icon: 'cs el-image'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Cloud',
                    icon: 'cs el-cloud',
                    items: [
                        {
                            label: 'Upload',
                            icon: 'cs el-cloud-upload'
                        },
                        {
                            label: 'Download',
                            icon: 'cs el-cloud-download'
                        },
                        {
                            label: 'Sync',
                            icon: 'cs el-refresh'
                        }
                    ]
                },
                {
                    label: 'Devices',
                    icon: 'cs el-desktop',
                    items: [
                        {
                            label: 'Phone',
                            icon: 'cs el-mobile'
                        },
                        {
                            label: 'Desktop',
                            icon: 'cs el-desktop'
                        },
                        {
                            label: 'Tablet',
                            icon: 'cs el-tablet'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<PanelMenu :model="items" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <PanelMenu :model="items" class="w-full md:w-20rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Files',
                    icon: 'cs el-file',
                    items: [
                        {
                            label: 'Documents',
                            icon: 'cs el-file',
                            items: [
                                {
                                    label: 'Invoices',
                                    icon: 'cs el-file-pdf',
                                    items: [
                                        {
                                            label: 'Pending',
                                            icon: 'cs el-stop'
                                        },
                                        {
                                            label: 'Paid',
                                            icon: 'cs el-check-circle'
                                        }
                                    ]
                                },
                                {
                                    label: 'Clients',
                                    icon: 'cs el-users'
                                }
                            ]
                        },
                        {
                            label: 'Images',
                            icon: 'cs el-image',
                            items: [
                                {
                                    label: 'Logos',
                                    icon: 'cs el-image'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Cloud',
                    icon: 'cs el-cloud',
                    items: [
                        {
                            label: 'Upload',
                            icon: 'cs el-cloud-upload'
                        },
                        {
                            label: 'Download',
                            icon: 'cs el-cloud-download'
                        },
                        {
                            label: 'Sync',
                            icon: 'cs el-refresh'
                        }
                    ]
                },
                {
                    label: 'Devices',
                    icon: 'cs el-desktop',
                    items: [
                        {
                            label: 'Phone',
                            icon: 'cs el-mobile'
                        },
                        {
                            label: 'Desktop',
                            icon: 'cs el-desktop'
                        },
                        {
                            label: 'Tablet',
                            icon: 'cs el-tablet'
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
        <PanelMenu :model="items" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Files',
        icon: 'cs el-file',
        items: [
            {
                label: 'Documents',
                icon: 'cs el-file',
                items: [
                    {
                        label: 'Invoices',
                        icon: 'cs el-file-pdf',
                        items: [
                            {
                                label: 'Pending',
                                icon: 'cs el-stop'
                            },
                            {
                                label: 'Paid',
                                icon: 'cs el-check-circle'
                            }
                        ]
                    },
                    {
                        label: 'Clients',
                        icon: 'cs el-users'
                    }
                ]
            },
            {
                label: 'Images',
                icon: 'cs el-image',
                items: [
                    {
                        label: 'Logos',
                        icon: 'cs el-image'
                    }
                ]
            }
        ]
    },
    {
        label: 'Cloud',
        icon: 'cs el-cloud',
        items: [
            {
                label: 'Upload',
                icon: 'cs el-cloud-upload'
            },
            {
                label: 'Download',
                icon: 'cs el-cloud-download'
            },
            {
                label: 'Sync',
                icon: 'cs el-refresh'
            }
        ]
    },
    {
        label: 'Devices',
        icon: 'cs el-desktop',
        items: [
            {
                label: 'Phone',
                icon: 'cs el-mobile'
            },
            {
                label: 'Desktop',
                icon: 'cs el-desktop'
            },
            {
                label: 'Tablet',
                icon: 'cs el-tablet'
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>Menubar requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card">
        <Menubar :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'cs el-home'
                },
                {
                    label: 'Features',
                    icon: 'cs el-star'
                },
                {
                    label: 'Projects',
                    icon: 'cs el-search',
                    items: [
                        {
                            label: 'Components',
                            icon: 'cs el-bolt'
                        },
                        {
                            label: 'Blocks',
                            icon: 'cs el-server'
                        },
                        {
                            label: 'UI Kit',
                            icon: 'cs el-pencil'
                        },
                        {
                            label: 'Templates',
                            icon: 'cs el-palette',
                            items: [
                                {
                                    label: 'Apollo',
                                    icon: 'cs el-palette'
                                },
                                {
                                    label: 'Ultima',
                                    icon: 'cs el-palette'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Contact',
                    icon: 'cs el-envelope'
                }
            ],
            code: {
                basic: `
<Menubar :model="items" />
`,
                options: `
<template>
    <div class="card">
        <Menubar :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'cs el-home'
                },
                {
                    label: 'Features',
                    icon: 'cs el-star'
                },
                {
                    label: 'Projects',
                    icon: 'cs el-search',
                    items: [
                        {
                            label: 'Components',
                            icon: 'cs el-bolt'
                        },
                        {
                            label: 'Blocks',
                            icon: 'cs el-server'
                        },
                        {
                            label: 'UI Kit',
                            icon: 'cs el-pencil'
                        },
                        {
                            label: 'Templates',
                            icon: 'cs el-palette',
                            items: [
                                {
                                    label: 'Apollo',
                                    icon: 'cs el-palette'
                                },
                                {
                                    label: 'Ultima',
                                    icon: 'cs el-palette'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Contact',
                    icon: 'cs el-envelope'
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Menubar :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'cs el-home'
    },
    {
        label: 'Features',
        icon: 'cs el-star'
    },
    {
        label: 'Projects',
        icon: 'cs el-search',
        items: [
            {
                label: 'Components',
                icon: 'cs el-bolt'
            },
            {
                label: 'Blocks',
                icon: 'cs el-server'
            },
            {
                label: 'UI Kit',
                icon: 'cs el-pencil'
            },
            {
                label: 'Templates',
                icon: 'cs el-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'cs el-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'cs el-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'cs el-envelope'
    }
]);
<\/script>
`
            }
        };
    }
};
</script>

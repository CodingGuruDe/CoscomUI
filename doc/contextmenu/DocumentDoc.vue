<template>
    <DocSectionText v-bind="$attrs">
        <p>Setting global property attaches the context menu to the document.</p>
    </DocSectionText>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Translate',
                    icon: 'cs el-language'
                },
                {
                    label: 'Speech',
                    icon: 'cs el-volume-up',
                    items: [
                        {
                            label: 'Start',
                            icon: 'cs el-caret-right'
                        },
                        {
                            label: 'Stop',
                            icon: 'cs el-pause'
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Print',
                    icon: 'cs el-print'
                }
            ],
            code: {
                basic: `
<ContextMenu global :model="items" />
`,
                options: `
<template>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Translate',
                    icon: 'cs el-language'
                },
                {
                    label: 'Speech',
                    icon: 'cs el-volume-up',
                    items: [
                        {
                            label: 'Start',
                            icon: 'cs el-caret-right'
                        },
                        {
                            label: 'Stop',
                            icon: 'cs el-pause'
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Print',
                    icon: 'cs el-print'
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Translate',
        icon: 'cs el-language'
    },
    {
        label: 'Speech',
        icon: 'cs el-volume-up',
        items: [
            {
                label: 'Start',
                icon: 'cs el-caret-right'
            },
            {
                label: 'Stop',
                icon: 'cs el-pause'
            }
        ]
    },
    {
        separator: true
    },
    {
        label: 'Print',
        icon: 'cs el-print'
    }
]);
<\/script>
`
            }
        };
    }
};
</script>

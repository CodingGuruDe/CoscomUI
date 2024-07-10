<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>position</i> property of the confirm options specifies the location of the Dialog.</p>
    </DocSectionText>
    <ConfirmDialog group="positioned"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-3">
            <Button @click="confirmPosition('left')" icon="cs el-arrow-right" label="Left" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('right')" icon="cs el-arrow-left" label="Right" severity="secondary" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-3">
            <Button @click="confirmPosition('topleft')" icon="cs el-arrow-down-right" label="TopLeft" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('top')" icon="cs el-arrow-down" label="Top" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('topright')" icon="cs el-arrow-down-left" label="TopRight" severity="secondary" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="cs el-arrow-up-right" label="BottomLeft" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottom')" icon="cs el-arrow-up" label="Bottom" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottomright')" icon="cs el-arrow-up-left" label="BottomRight" severity="secondary" style="min-width: 10rem"></Button>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmDialog group="positioned"></ConfirmDialog>
<div class="flex flex-wrap justify-content-center gap-2 mb-3">
    <Button @click="confirmPosition('left')" icon="cs el-arrow-right" label="Left" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('right')" icon="cs el-arrow-left" label="Right" severity="secondary" style="min-width: 10rem"></Button>
</div>
<div class="flex flex-wrap justify-content-center gap-2 mb-3">
    <Button @click="confirmPosition('topleft')" icon="cs el-arrow-down-right" label="TopLeft" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('top')" icon="cs el-arrow-down" label="Top" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('topright')" icon="cs el-arrow-down-left" label="TopRight" severity="secondary" style="min-width: 10rem"></Button>
</div>
<div class="flex flex-wrap justify-content-center gap-2">
    <Button @click="confirmPosition('bottomleft')" icon="cs el-arrow-up-right" label="BottomLeft" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('bottom')" icon="cs el-arrow-up" label="Bottom" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('bottomright')" icon="cs el-arrow-up-left" label="BottomRight" severity="secondary" style="min-width: 10rem"></Button>
</div>
`,
                options: `
<template>
    <Toast />
    <ConfirmDialog group="positioned"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-3">
            <Button @click="confirmPosition('left')" icon="cs el-arrow-right" label="Left" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('right')" icon="cs el-arrow-left" label="Right" severity="secondary" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-3">
            <Button @click="confirmPosition('topleft')" icon="cs el-arrow-down-right" label="TopLeft" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('top')" icon="cs el-arrow-down" label="Top" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('topright')" icon="cs el-arrow-down-left" label="TopRight" severity="secondary" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="cs el-arrow-up-right" label="BottomLeft" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottom')" icon="cs el-arrow-up" label="Bottom" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottomright')" icon="cs el-arrow-up-left" label="BottomRight" severity="secondary" style="min-width: 10rem"></Button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        confirmPosition(position) {
            this.$confirm.require({
                group: 'positioned',
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'cs el-info-circle',
                position: position,
                rejectClass: 'v-button-secondary v-button-text',
                acceptClass: 'v-button-text',
                rejectLabel: 'Cancel',
                acceptLabel: 'Save',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
                }
            });
        },
    }
};
<\/script>
`,
                composition: `
<template>
    <Toast />
    <ConfirmDialog group="positioned"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-3">
            <Button @click="confirmPosition('left')" icon="cs el-arrow-right" label="Left" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('right')" icon="cs el-arrow-left" label="Right" severity="secondary" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-3">
            <Button @click="confirmPosition('topleft')" icon="cs el-arrow-down-right" label="TopLeft" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('top')" icon="cs el-arrow-down" label="Top" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('topright')" icon="cs el-arrow-down-left" label="TopRight" severity="secondary" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="cs el-arrow-up-right" label="BottomLeft" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottom')" icon="cs el-arrow-up" label="Bottom" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottomright')" icon="cs el-arrow-up-left" label="BottomRight" severity="secondary" style="min-width: 10rem"></Button>
        </div>
    </div>
</template>

<script setup>
import { useConfirm } from "@coscom/coscom-ui/useconfirm";
import { useToast } from "@coscom/coscom-ui/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirmPosition = (position) => {
    confirm.require({
        group: 'positioned',
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'cs el-info-circle',
        position: position,
        rejectClass: 'v-button-secondary v-button-text',
        acceptClass: 'v-button-text',
        rejectLabel: 'Cancel',
        acceptLabel: 'Save',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
        }
    });
};
<\/script>
`
            }
        };
    },
    methods: {
        confirmPosition(position) {
            this.$confirm.require({
                group: 'positioned',
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'cs el-info-circle',
                position: position,
                rejectClass: 'v-button-secondary v-button-text',
                acceptClass: 'v-button-text',
                rejectLabel: 'Cancel',
                acceptLabel: 'Save',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
                }
            });
        }
    }
};
</script>

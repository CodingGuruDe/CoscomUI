<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>position</i> property defines the location of relative to the screen.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="Left" icon="cs el-arrow-right" @click="openPosition('left')" severity="secondary" style="min-width: 10rem" />
            <Button label="Right" icon="cs el-arrow-left" @click="openPosition('right')" severity="secondary" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="TopLeft" icon="cs el-arrow-down-right" @click="openPosition('topleft')" severity="secondary" style="min-width: 10rem" />
            <Button label="Top" icon="cs el-arrow-down" @click="openPosition('top')" severity="secondary" style="min-width: 10rem" />
            <Button label="TopRight" icon="cs el-arrow-down-left" @click="openPosition('topright')" severity="secondary" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button label="BottomLeft" icon="cs el-arrow-up-right" @click="openPosition('bottomleft')" severity="secondary" style="min-width: 10rem" />
            <Button label="Bottom" icon="cs el-arrow-up" @click="openPosition('bottom')" severity="secondary" style="min-width: 10rem" />
            <Button label="BottomRight" icon="cs el-arrow-up-left" @click="openPosition('bottomright')" severity="secondary" style="min-width: 10rem" />
        </div>

        <Dialog v-model:visible="visible" header="Edit Profile" :style="{ width: '25rem' }" :position="position" :modal="true" :draggable="false">
            <span class="p-text-secondary block mb-5">Update your information.</span>
            <div class="flex align-items-center gap-3 mb-3">
                <label for="username" class="font-semibold w-6rem">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="email" class="font-semibold w-6rem">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            position: 'center',
            visible: false,
            code: {
                basic: `
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="Left" icon="cs el-arrow-right" @click="openPosition('left')" severity="secondary" style="min-width: 10rem" />
    <Button label="Right" icon="cs el-arrow-left" @click="openPosition('right')" severity="secondary" style="min-width: 10rem" />
</div>
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="TopLeft" icon="cs el-arrow-down-right" @click="openPosition('topleft')" severity="secondary" style="min-width: 10rem" />
    <Button label="Top" icon="cs el-arrow-down" @click="openPosition('top')" severity="secondary" style="min-width: 10rem" />
    <Button label="TopRight" icon="cs el-arrow-down-left" @click="openPosition('topright')" severity="secondary" style="min-width: 10rem" />
</div>
<div class="flex flex-wrap justify-content-center gap-2">
    <Button label="BottomLeft" icon="cs el-arrow-up-right" @click="openPosition('bottomleft')" severity="secondary" style="min-width: 10rem" />
    <Button label="Bottom" icon="cs el-arrow-up" @click="openPosition('bottom')" severity="secondary" style="min-width: 10rem" />
    <Button label="BottomRight" icon="cs el-arrow-up-left" @click="openPosition('bottomright')" severity="secondary" style="min-width: 10rem" />
</div>

<Dialog v-model:visible="visible" header="Edit Profile" :style="{ width: '25rem' }" :position="position" :modal="true" :draggable="false">
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
</Dialog>
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="Left" icon="cs el-arrow-right" @click="openPosition('left')" severity="secondary" style="min-width: 10rem" />
            <Button label="Right" icon="cs el-arrow-left" @click="openPosition('right')" severity="secondary" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="TopLeft" icon="cs el-arrow-down-right" @click="openPosition('topleft')" severity="secondary" style="min-width: 10rem" />
            <Button label="Top" icon="cs el-arrow-down" @click="openPosition('top')" severity="secondary" style="min-width: 10rem" />
            <Button label="TopRight" icon="cs el-arrow-down-left" @click="openPosition('topright')" severity="secondary" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button label="BottomLeft" icon="cs el-arrow-up-right" @click="openPosition('bottomleft')" severity="secondary" style="min-width: 10rem" />
            <Button label="Bottom" icon="cs el-arrow-up" @click="openPosition('bottom')" severity="secondary" style="min-width: 10rem" />
            <Button label="BottomRight" icon="cs el-arrow-up-left" @click="openPosition('bottomright')" severity="secondary" style="min-width: 10rem" />
        </div>

        <Dialog v-model:visible="visible" header="Edit Profile" :style="{ width: '25rem' }" :position="position" :modal="true" :draggable="false">
            <span class="p-text-secondary block mb-5">Update your information.</span>
            <div class="flex align-items-center gap-3 mb-3">
                <label for="username" class="font-semibold w-6rem">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="email" class="font-semibold w-6rem">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            position: 'center',
            visible: false
        };
    },
    methods: {
        openPosition(position) {
            this.position = position;
            this.visible = true;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="Left" icon="cs el-arrow-right" @click="openPosition('left')" severity="secondary" style="min-width: 10rem" />
            <Button label="Right" icon="cs el-arrow-left" @click="openPosition('right')" severity="secondary" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="TopLeft" icon="cs el-arrow-down-right" @click="openPosition('topleft')" severity="secondary" style="min-width: 10rem" />
            <Button label="Top" icon="cs el-arrow-down" @click="openPosition('top')" severity="secondary" style="min-width: 10rem" />
            <Button label="TopRight" icon="cs el-arrow-down-left" @click="openPosition('topright')" severity="secondary" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button label="BottomLeft" icon="cs el-arrow-up-right" @click="openPosition('bottomleft')" severity="secondary" style="min-width: 10rem" />
            <Button label="Bottom" icon="cs el-arrow-up" @click="openPosition('bottom')" severity="secondary" style="min-width: 10rem" />
            <Button label="BottomRight" icon="cs el-arrow-up-left" @click="openPosition('bottomright')" severity="secondary" style="min-width: 10rem" />
        </div>

        <Dialog v-model:visible="visible" header="Edit Profile" :style="{ width: '25rem' }" :position="position" :modal="true" :draggable="false">
            <span class="p-text-secondary block mb-5">Update your information.</span>
            <div class="flex align-items-center gap-3 mb-3">
                <label for="username" class="font-semibold w-6rem">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="email" class="font-semibold w-6rem">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const position = ref('center');
const visible = ref(false);

const openPosition = (pos) => {
    position.value = pos;
    visible.value = true;
}
<\/script>
`
            }
        };
    },
    methods: {
        openPosition(position) {
            this.position = position;
            this.visible = true;
        }
    }
};
</script>

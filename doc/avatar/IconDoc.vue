<template>
    <DocSectionText v-bind="$attrs">
        <p>A font icon is displayed as an Avatar with the <i>icon</i> property.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="cs el-user" class="mr-2" size="xlarge" />
                <Avatar icon="cs el-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
                <Avatar icon="cs el-user" style="background-color: #dee9fc; color: #1a2551" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="cs el-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="cs el-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                <Avatar icon="cs el-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" icon="cs el-user" size="xlarge" />
            </div>
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
<Avatar icon="cs el-user" class="mr-2" size="xlarge" />
<Avatar icon="cs el-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
<Avatar icon="cs el-user" style="background-color: #dee9fc; color: #1a2551" />

<Avatar icon="cs el-user" class="mr-2" size="xlarge" shape="circle" />
<Avatar icon="cs el-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
<Avatar icon="cs el-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />

<Avatar v-badge.danger="4" class="p-overlay-badge" icon="cs el-user" size="xlarge" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="cs el-user" class="mr-2" size="xlarge" />
                <Avatar icon="cs el-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
                <Avatar icon="cs el-user" style="background-color: #dee9fc; color: #1a2551" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="cs el-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="cs el-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                <Avatar icon="cs el-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" icon="cs el-user" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="cs el-user" class="mr-2" size="xlarge" />
                <Avatar icon="cs el-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
                <Avatar icon="cs el-user" style="background-color: #dee9fc; color: #1a2551" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="cs el-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="cs el-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                <Avatar icon="cs el-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" icon="cs el-user" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script setup>

<\/script>
`
            }
        };
    }
};
</script>

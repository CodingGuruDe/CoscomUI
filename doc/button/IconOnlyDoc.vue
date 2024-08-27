<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can have icons without labels.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" aria-label="Search" />
            <Button icon="cs el-user" type="info" aria-label="User" />
            <Button icon="cs el-bell" type="warning" aria-label="Notification" />
            <Button icon="cs el-heart" type="help" aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" rounded outlined aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" rounded outlined aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" rounded outlined aria-label="Search" />
            <Button icon="cs el-user" type="info" rounded outlined aria-label="User" />
            <Button icon="cs el-bell" type="warning" rounded outlined aria-label="Notification" />
            <Button icon="cs el-heart" type="help" rounded outlined aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" rounded outlined aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" text raised rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" text raised rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" text raised rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" text raised rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" text raised rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" text raised rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" text raised rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="cs el-check" text rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" text rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" text rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" text rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" text rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" text rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" text rounded aria-label="Cancel" />
        </div>
    </div>
    <DocSectionCode :code="code" hideStackBlitz hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button icon="cs el-check" aria-label="Filter" />
<Button icon="cs el-bookmark" type="secondary" aria-label="Bookmark" />
<Button icon="cs el-search" type="success" aria-label="Search" />
<Button icon="cs el-user" type="info" aria-label="User" />
<Button icon="cs el-bell" type="warning" aria-label="Notification" />
<Button icon="cs el-heart" type="help" aria-label="Favorite" />
<Button icon="cs el-times" type="danger" aria-label="Cancel" />

<Button icon="cs el-check" rounded aria-label="Filter" />
<Button icon="cs el-bookmark" type="secondary" rounded aria-label="Bookmark" />
<Button icon="cs el-search" type="success" rounded aria-label="Search" />
<Button icon="cs el-user" type="info" rounded aria-label="User" />
<Button icon="cs el-bell" type="warning" rounded aria-label="Notification" />
<Button icon="cs el-heart" type="help" rounded aria-label="Favorite" />
<Button icon="cs el-times" type="danger" rounded aria-label="Cancel" />

<Button icon="cs el-check" rounded outlined aria-label="Filter" />
<Button icon="cs el-bookmark" type="secondary" rounded outlined aria-label="Bookmark" />
<Button icon="cs el-search" type="success" rounded outlined aria-label="Search" />
<Button icon="cs el-user" type="info" rounded outlined aria-label="User" />
<Button icon="cs el-bell" type="warning" rounded outlined aria-label="Notification" />
<Button icon="cs el-heart" type="help" rounded outlined aria-label="Favorite" />
<Button icon="cs el-times" type="danger" rounded outlined aria-label="Cancel" />

<Button icon="cs el-check" text raised rounded aria-label="Filter" />
<Button icon="cs el-bookmark" type="secondary" text raised rounded aria-label="Bookmark" />
<Button icon="cs el-search" type="success" text raised rounded aria-label="Search" />
<Button icon="cs el-user" type="info" text raised rounded aria-label="User" />
<Button icon="cs el-bell" type="warning" text raised rounded aria-label="Notification" />
<Button icon="cs el-heart" type="help" text raised rounded aria-label="Favorite" />
<Button icon="cs el-times" type="danger" text raised rounded aria-label="Cancel" />

<Button icon="cs el-check" text rounded aria-label="Filter" />
<Button icon="cs el-bookmark" type="secondary" text rounded aria-label="Bookmark" />
<Button icon="cs el-search" type="success" text rounded aria-label="Search" />
<Button icon="cs el-user" type="info" text rounded aria-label="User" />
<Button icon="cs el-bell" type="warning" text rounded aria-label="Notification" />
<Button icon="cs el-heart" type="help" text rounded aria-label="Favorite" />
<Button icon="cs el-times" type="danger" text rounded aria-label="Cancel" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" aria-label="Search" />
            <Button icon="cs el-user" type="info" aria-label="User" />
            <Button icon="cs el-bell" type="warning" aria-label="Notification" />
            <Button icon="cs el-heart" type="help" aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" rounded outlined aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" rounded outlined aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" rounded outlined aria-label="Search" />
            <Button icon="cs el-user" type="info" rounded outlined aria-label="User" />
            <Button icon="cs el-bell" type="warning" rounded outlined aria-label="Notification" />
            <Button icon="cs el-heart" type="help" rounded outlined aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" rounded outlined aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" text raised rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" text raised rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" text raised rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" text raised rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" text raised rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" text raised rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" text raised rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="cs el-check" text rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" text rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" text rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" text rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" text rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" text rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" text rounded aria-label="Cancel" />
        </div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" aria-label="Search" />
            <Button icon="cs el-user" type="info" aria-label="User" />
            <Button icon="cs el-bell" type="warning" aria-label="Notification" />
            <Button icon="cs el-heart" type="help" aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" rounded outlined aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" rounded outlined aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" rounded outlined aria-label="Search" />
            <Button icon="cs el-user" type="info" rounded outlined aria-label="User" />
            <Button icon="cs el-bell" type="warning" rounded outlined aria-label="Notification" />
            <Button icon="cs el-heart" type="help" rounded outlined aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" rounded outlined aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="cs el-check" text raised rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" text raised rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" text raised rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" text raised rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" text raised rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" text raised rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" text raised rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="cs el-check" text rounded aria-label="Filter" />
            <Button icon="cs el-bookmark" type="secondary" text rounded aria-label="Bookmark" />
            <Button icon="cs el-search" type="success" text rounded aria-label="Search" />
            <Button icon="cs el-user" type="info" text rounded aria-label="User" />
            <Button icon="cs el-bell" type="warning" text rounded aria-label="Notification" />
            <Button icon="cs el-heart" type="help" text rounded aria-label="Favorite" />
            <Button icon="cs el-times" type="danger" text rounded aria-label="Cancel" />
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

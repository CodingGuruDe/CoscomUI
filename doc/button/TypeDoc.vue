<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>type</i> property defines the variant of a button.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" type="secondary" />
        <Button label="Success" type="success" />
        <Button label="Info" type="info" />
        <Button label="Warning" type="warning" />
        <Button label="Help" type="help" />
        <Button label="Danger" type="danger" />
        <Button label="Contrast" type="contrast" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" />
<Button label="Secondary" type="secondary" />
<Button label="Success" type="success" />
<Button label="Info" type="info" />
<Button label="Warning" type="warning" />
<Button label="Help" type="help" />
<Button label="Danger" type="danger" />
<Button label="Contrast" type="contrast" />
`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" type="secondary" />
        <Button label="Success" type="success" />
        <Button label="Info" type="info" />
        <Button label="Warning" type="warning" />
        <Button label="Help" type="help" />
        <Button label="Danger" type="danger" />
        <Button label="Contrast" type="contrast" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" type="secondary" />
        <Button label="Success" type="success" />
        <Button label="Info" type="info" />
        <Button label="Warning" type="warning" />
        <Button label="Help" type="help" />
        <Button label="Danger" type="danger" />
        <Button label="Contrast" type="contrast" />
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>Outlined buttons display a border without a background initially.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" outlined />
        <Button label="Secondary" type="secondary" outlined />
        <Button label="Success" type="success" outlined />
        <Button label="Info" type="info" outlined />
        <Button label="Warning" type="warning" outlined />
        <Button label="Help" type="help" outlined />
        <Button label="Danger" type="danger" outlined />
        <Button label="Contrast" type="contrast" outlined />
    </div>
    <DocSectionCode :code="code" hideStackBlitz hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" outlined />
<Button label="Secondary" type="secondary" outlined />
<Button label="Success" type="success" outlined />
<Button label="Info" type="info" outlined />
<Button label="Warning" type="warning" outlined />
<Button label="Help" type="help" outlined />
<Button label="Danger" type="danger" outlined />
<Button label="Contrast" type="contrast" outlined />
`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" outlined />
        <Button label="Secondary" type="secondary" outlined />
        <Button label="Success" type="success" outlined />
        <Button label="Info" type="info" outlined />
        <Button label="Warning" type="warning" outlined />
        <Button label="Help" type="help" outlined />
        <Button label="Danger" type="danger" outlined />
        <Button label="Contrast" type="contrast" outlined />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" outlined />
        <Button label="Secondary" type="secondary" outlined />
        <Button label="Success" type="success" outlined />
        <Button label="Info" type="info" outlined />
        <Button label="Warning" type="warning" outlined />
        <Button label="Help" type="help" outlined />
        <Button label="Danger" type="danger" outlined />
        <Button label="Contrast" type="contrast" outlined />
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

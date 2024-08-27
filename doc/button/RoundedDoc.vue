<template>
    <DocSectionText v-bind="$attrs">
        <p>Rounded buttons have a circular border radius.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" rounded />
        <Button label="Secondary" type="secondary" rounded />
        <Button label="Success" type="success" rounded />
        <Button label="Info" type="info" rounded />
        <Button label="Warning" type="warning" rounded />
        <Button label="Help" type="help" rounded />
        <Button label="Danger" type="danger" rounded />
        <Button label="Contrast" type="contrast" rounded />
    </div>
    <DocSectionCode :code="code" hideStackBlitz hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" rounded />
<Button label="Secondary" type="secondary" rounded />
<Button label="Success" type="success" rounded />
<Button label="Info" type="info" rounded />
<Button label="Warning" type="warning" rounded />
<Button label="Help" type="help" rounded />
<Button label="Danger" type="danger" rounded />
<Button label="Contrast" type="contrast" rounded />
`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" rounded />
        <Button label="Secondary" type="secondary" rounded />
        <Button label="Success" type="success" rounded />
        <Button label="Info" type="info" rounded />
        <Button label="Warning" type="warning" rounded />
        <Button label="Help" type="help" rounded />
        <Button label="Danger" type="danger" rounded />
        <Button label="Contrast" type="contrast" rounded />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" rounded />
        <Button label="Secondary" type="secondary" rounded />
        <Button label="Success" type="success" rounded />
        <Button label="Info" type="info" rounded />
        <Button label="Warning" type="warning" rounded />
        <Button label="Help" type="help" rounded />
        <Button label="Danger" type="danger" rounded />
        <Button label="Contrast" type="contrast" rounded />
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons are displayed as textual elements.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text />
        <Button label="Secondary" type="secondary" text />
        <Button label="Success" type="success" text />
        <Button label="Info" type="info" text />
        <Button label="Warning" type="warning" text />
        <Button label="Help" type="help" text />
        <Button label="Danger" type="danger" text />
        <Button label="Plain" plain text />
    </div>
    <DocSectionCode :code="code" hideStackBlitz hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" text />
<Button label="Secondary" type="secondary" text />
<Button label="Success" type="success" text />
<Button label="Info" type="info" text />
<Button label="Warning" type="warning" text />
<Button label="Help" type="help" text />
<Button label="Danger" type="danger" text />
<Button label="Plain" plain text />
`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text />
        <Button label="Secondary" type="secondary" text />
        <Button label="Success" type="success" text />
        <Button label="Info" type="info" text />
        <Button label="Warning" type="warning" text />
        <Button label="Help" type="help" text />
        <Button label="Danger" type="danger" text />
        <Button label="Plain" plain text />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text />
        <Button label="Secondary" type="secondary" text />
        <Button label="Success" type="success" text />
        <Button label="Info" type="info" text />
        <Button label="Warning" type="warning" text />
        <Button label="Help" type="help" text />
        <Button label="Danger" type="danger" text />
        <Button label="Plain" plain text />
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

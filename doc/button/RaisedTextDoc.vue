<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons can be displayed as raised as well for elevation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text raised />
        <Button label="Secondary" type="secondary" text raised />
        <Button label="Success" type="success" text raised />
        <Button label="Info" type="info" text raised />
        <Button label="Warning" type="warning" text raised />
        <Button label="Help" type="help" text raised />
        <Button label="Danger" type="danger" text raised />
        <Button label="Plain" plain text raised />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" text raised />
<Button label="Secondary" type="secondary" text raised />
<Button label="Success" type="success" text raised />
<Button label="Info" type="info" text raised />
<Button label="Warning" type="warning" text raised />
<Button label="Help" type="help" text raised />
<Button label="Danger" type="danger" text raised />
<Button label="Plain" plain text raised />
`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text raised />
        <Button label="Secondary" type="secondary" text raised />
        <Button label="Success" type="success" text raised />
        <Button label="Info" type="info" text raised />
        <Button label="Warning" type="warning" text raised />
        <Button label="Help" type="help" text raised />
        <Button label="Danger" type="danger" text raised />
        <Button label="Plain" plain text raised />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text raised />
        <Button label="Secondary" type="secondary" text raised />
        <Button label="Success" type="success" text raised />
        <Button label="Info" type="info" text raised />
        <Button label="Warning" type="warning" text raised />
        <Button label="Help" type="help" text raised />
        <Button label="Danger" type="danger" text raised />
        <Button label="Plain" plain text raised />
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

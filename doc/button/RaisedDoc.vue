<template>
    <DocSectionText v-bind="$attrs">
        <p>Raised buttons display a shadow to indicate elevation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" raised />
        <Button label="Secondary" type="secondary" raised />
        <Button label="Success" type="success" raised />
        <Button label="Info" type="info" raised />
        <Button label="Warning" type="warning" raised />
        <Button label="Help" type="help" raised />
        <Button label="Danger" type="danger" raised />
        <Button label="Contrast" type="contrast" raised />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" raised />
<Button label="Secondary" type="secondary" raised />
<Button label="Success" type="success" raised />
<Button label="Info" type="info" raised />
<Button label="Warning" type="warning" raised />
<Button label="Help" type="help" raised />
<Button label="Danger" type="danger" raised />
<Button label="Contrast" type="contrast" raised />
`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" raised />
        <Button label="Secondary" type="secondary" raised />
        <Button label="Success" type="success" raised />
        <Button label="Info" type="info" raised />
        <Button label="Warning" type="warning" raised />
        <Button label="Help" type="help" raised />
        <Button label="Danger" type="danger" raised />
        <Button label="Contrast" type="contrast" raised />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" raised />
        <Button label="Secondary" type="secondary" raised />
        <Button label="Success" type="success" raised />
        <Button label="Info" type="info" raised />
        <Button label="Warning" type="warning" raised />
        <Button label="Help" type="help" raised />
        <Button label="Danger" type="danger" raised />
        <Button label="Contrast" type="contrast" raised />
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>Out of the box you get access to all colors in the Material Design specification through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color prop.</p>
    </DocSectionText>

    <div class="card flex justify-content-center gap-3 text-center">
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
export default {
    data() {
        return {};
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple buttons are grouped when wrapped inside an element with <i>ButtonGroup</i> component.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <ButtonGroup>
            <Button label="Save" icon="cs el-check" />
            <Button label="Delete" icon="cs el-trash" />
            <Button label="Cancel" icon="cs el-times" />
        </ButtonGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ButtonGroup>
    <Button label="Save" icon="cs el-check" />
    <Button label="Delete" icon="cs el-trash" />
    <Button label="Cancel" icon="cs el-times" />
</ButtonGroup>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ButtonGroup>
            <Button label="Save" icon="cs el-check" />
            <Button label="Delete" icon="cs el-trash" />
            <Button label="Cancel" icon="cs el-times" />
        </ButtonGroup>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ButtonGroup>
            <Button label="Save" icon="cs el-check" />
            <Button label="Delete" icon="cs el-trash" />
            <Button label="Cancel" icon="cs el-times" />
        </ButtonGroup>
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

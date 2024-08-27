<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple checkboxes can be grouped together.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-4">
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer1" name="pizza" value="Sending" />
            <label for="transfer1" class="ml-2"> Sending </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer2" name="pizza" value="Receiving" />
            <label for="transfer2" class="ml-2"> Receiving </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer3" name="pizza" value="ActualData" />
            <label for="transfer3" class="ml-2"> Actual Data </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer4" name="pizza" value="BinaryFiles" />
            <label for="transfer4" class="ml-2"> Binary files </label>
        </div>
    </div>
    <DocSectionCode :code="code" hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            transfer: null,
            code: {
                basic: `
<div class="card flex flex-wrap justify-content-center gap-4">
    <div class="flex align-items-center">
        <Checkbox v-model="transfer" inputId="transfer1" name="transfer" value="Sending" />
        <label for="transfer1" class="ml-2"> Sending </label>
    </div>
    <div class="flex align-items-center">
        <Checkbox v-model="transfer" inputId="transfer2" name="transfer" value="Receiving" />
        <label for="transfer2" class="ml-2"> Receiving </label>
    </div>
    <div class="flex align-items-center">
        <Checkbox v-model="transfer" inputId="transfer3" name="transfer" value="ActualData" />
        <label for="transfer3" class="ml-2"> Actual Data </label>
    </div>
    <div class="flex align-items-center">
        <Checkbox v-model="transfer" inputId="transfer4" name="transfer" value="BinaryFiles" />
        <label for="transfer4" class="ml-2"> Bynary Files </label>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-4">
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer1" name="transfer" value="Sending" />
            <label for="transfer1" class="ml-2"> Sending </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer2" name="transfer" value="Receiving" />
            <label for="transfer2" class="ml-2"> Receiving </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer3" name="transfer" value="ActualData" />
            <label for="transfer3" class="ml-2"> Actual Data </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer4" name="transfer" value="BinaryFiles" />
            <label for="transfer4" class="ml-2"> Bynary Files </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pizza: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-4">
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer1" name="transfer" value="Sending" />
            <label for="transfer1" class="ml-2"> Sending </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer2" name="transfer" value="Receiving" />
            <label for="transfer2" class="ml-2"> Receiving </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer3" name="transfer" value="ActualData" />
            <label for="transfer3" class="ml-2"> Actual Data </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="transfer" inputId="transfer4" name="transfer" value="BinaryFiles" />
            <label for="transfer4" class="ml-2"> Bynary Files </label>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const pizza = ref();
<\/script>
`
            }
        };
    }
};
</script>

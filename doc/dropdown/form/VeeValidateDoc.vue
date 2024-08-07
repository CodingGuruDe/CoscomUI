<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <FloatLabel>
                <Dropdown id="dd" v-model="value" :options="cities" optionLabel="name" :class="['w-full md:w-14rem', { 'v-invalid': errorMessage }]" aria-describedby="dd-error" />
                <label for="dd">Select a City</label>
            </FloatLabel>
            <small id="dd-error" class="v-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'vee-validate': '4.8.2' }" />
</template>

<script>
import { useToast } from '@coscom/coscom-ui/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'City is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.name) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.name, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <FloatLabel>
                <Dropdown id="dd" v-model="value" :options="cities" optionLabel="name"
                    :class="['w-full md:w-14rem', { 'v-invalid': errorMessage }]" aria-describedby="dd-error" />
                <label for="dd">Select a City</label>
            </FloatLabel>
            <small class="v-error" id="dd-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <FloatLabel>
                <Dropdown id="dd" v-model="value" :options="cities" optionLabel="name"
                    :class="['w-full md:w-14rem', { 'v-invalid': errorMessage }]" aria-describedby="dd-error" />
                <label for="dd">Select a City</label>
            </FloatLabel>
            <small class="v-error" id="dd-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script>
import { useToast } from '@coscom/coscom-ui/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'City is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.name) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.name, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <FloatLabel>
                <Dropdown id="dd" v-model="value" :options="cities" optionLabel="name"
                    :class="['w-full md:w-14rem', { 'v-invalid': errorMessage }]" aria-describedby="dd-error" />
                <label for="dd">Select a City</label>
            </FloatLabel>
            <small class="v-error" id="dd-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from '@coscom/coscom-ui/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

function validateField(value) {
    if (!value) {
        return 'City is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.name) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.name, life: 3000 });
        resetForm();
    }
});
<\/script>
`
            }
        };
    }
};
</script>

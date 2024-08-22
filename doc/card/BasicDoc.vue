<template>
    <DocSectionText v-bind="$attrs">
        <p>A simple Login Card created for demonstration.</p>
    </DocSectionText>
    <div class="mb-3 py-5">
        <Card>
            <template #title>Login Card</template>
            <template #content>
                <div class="card flex justify-content-left">
                    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form>
                                <div class="flex flex-column gap-2">
                                    <label for="username">Username</label>
                                    <InputText v-model="username" aria-describedby="username-help" />
                                    <small id="username-help">Enter your username.</small>
                                </div>

                                <div class="mt-4 flex flex-column gap-2">
                                    <label for="username">Password</label>
                                    <Password v-model="password">
                                        <template #header>
                                            <h6>Pick a password</h6>
                                        </template>
                                        <template #footer>
                                            <Divider />
                                            <p class="mt-2">Requirements</p>
                                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                                <li>At least one lowercase</li>
                                                <li>At least one uppercase</li>
                                                <li>At least one numeric</li>
                                                <li>Minimum 8 characters</li>
                                            </ul>
                                        </template>
                                    </Password>
                                    <small id="username-help">Enter your password.</small>
                                </div>

                                <div class="mt-2">
                                    <Button type="button" :label="loading ? 'Checking...' : 'Sign in'" iconPos="right" :loading="loading" @click="startloading" />
                                </div>
                            </form>

                            <p class="mt-2 text-center text-sm text-gray-500">
                                Not a member?
                                <a href="#" class="font-semibold leading-6 text-blue-400 hover:text-blue-600">Contact your local Administrator</a>
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
    <DocSectionCode :code="code" hideStackBlitz hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            username: '',
            password: '',
            code: {
                basic: `
<Card>
    <template #title>Login Card</template>
    <template #content>
        <div class="card flex justify-content-left">
                    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form>
                                <div class="flex flex-column gap-2">
                                    <label for="username">Username</label>
                                    <InputText v-model="username" aria-describedby="username-help" />
                                    <small id="username-help">Enter your username.</small>
                                </div>

                                <div class="mt-4 flex flex-column gap-2">
                                    <label for="username">Password</label>
                                    <Password v-model="password">
                                        <template #header>
                                            <h6>Pick a password</h6>
                                        </template>
                                        <template #footer>
                                            <Divider />
                                            <p class="mt-2">Requirements</p>
                                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                                <li>At least one lowercase</li>
                                                <li>At least one uppercase</li>
                                                <li>At least one numeric</li>
                                                <li>Minimum 8 characters</li>
                                            </ul>
                                        </template>
                                    </Password>
                                    <small id="username-help">Enter your password.</small>
                                </div>

                                <div class="mt-2">
                                    <Button type="button" :label="loading ? 'Checking...' : 'Sign in'" iconPos="right" :loading="loading" @click="startloading" />
                                </div>
                            </form>

                            <p class="mt-2 text-center text-sm text-gray-500">
                                Not a member?
                                <a href="#" class="font-semibold leading-6 text-blue-400 hover:text-blue-600">Contact your local Administrator</a>
                            </p>
                        </div>
                    </div>
                </div>
    </template>
</Card>
`,
                options: `
<template>
    <Card>
        <template #title>Login Card</template>
        <template #content>
            <div class="card flex justify-content-left">
                    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form>
                                <div class="flex flex-column gap-2">
                                    <label for="username">Username</label>
                                    <InputText v-model="username" aria-describedby="username-help" />
                                    <small id="username-help">Enter your username.</small>
                                </div>

                                <div class="mt-4 flex flex-column gap-2">
                                    <label for="username">Password</label>
                                    <Password v-model="password">
                                        <template #header>
                                            <h6>Pick a password</h6>
                                        </template>
                                        <template #footer>
                                            <Divider />
                                            <p class="mt-2">Requirements</p>
                                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                                <li>At least one lowercase</li>
                                                <li>At least one uppercase</li>
                                                <li>At least one numeric</li>
                                                <li>Minimum 8 characters</li>
                                            </ul>
                                        </template>
                                    </Password>
                                    <small id="username-help">Enter your password.</small>
                                </div>

                                <div class="mt-2">
                                    <Button type="button" :label="loading ? 'Checking...' : 'Sign in'" iconPos="right" :loading="loading" @click="startloading" />
                                </div>
                            </form>

                            <p class="mt-2 text-center text-sm text-gray-500">
                                Not a member?
                                <a href="#" class="font-semibold leading-6 text-blue-400 hover:text-blue-600">Contact your local Administrator</a>
                            </p>
                        </div>
                    </div>
                </div>
        </template>
    </Card>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            username: '',
            password: '',
        }
    }
}            
<\/script>
`,
                composition: `
<template>
    <Card>
        <template #title>Login Card</template>
        <template #content>
            <div class="card flex justify-content-left">
                    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form>
                                <div class="flex flex-column gap-2">
                                    <label for="username">Username</label>
                                    <InputText v-model="username" aria-describedby="username-help" />
                                    <small id="username-help">Enter your username.</small>
                                </div>

                                <div class="mt-4 flex flex-column gap-2">
                                    <label for="username">Password</label>
                                    <Password v-model="password">
                                        <template #header>
                                            <h6>Pick a password</h6>
                                        </template>
                                        <template #footer>
                                            <Divider />
                                            <p class="mt-2">Requirements</p>
                                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                                <li>At least one lowercase</li>
                                                <li>At least one uppercase</li>
                                                <li>At least one numeric</li>
                                                <li>Minimum 8 characters</li>
                                            </ul>
                                        </template>
                                    </Password>
                                    <small id="username-help">Enter your password.</small>
                                </div>

                                <div class="mt-2">
                                    <Button type="button" :label="loading ? 'Checking...' : 'Sign in'" iconPos="right" :loading="loading" @click="startloading" />
                                </div>
                            </form>

                            <p class="mt-2 text-center text-sm text-gray-500">
                                Not a member?
                                <a href="#" class="font-semibold leading-6 text-blue-400 hover:text-blue-600">Contact your local Administrator</a>
                            </p>
                        </div>
                    </div>
                </div>
        </template>
    </Card>
</template>

<script setup>
import {ref} from 'vue';

let loading = ref(false);
let username = ref('');
let password = ref('');
<\/script>
`
            }
        };
    },
    methods: {
        startloading() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>If you want to use the Single File Component(SFC) style, you can directly import components from Coscom UI or install it globally to a Vue app.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<template>
  <button>coscom</button>
</template>

<script>
  import { defineComponent } from 'vue'
  import { Button } from '@coscom/coscom-ui'

  export default defineComponent({
    components: {
      Button
    }
  })
<\/script>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button label="Check" icon="cs el-check" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Button label="Check" icon="cs el-check" />
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

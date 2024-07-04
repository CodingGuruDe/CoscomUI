<template>
    <DocSectionText v-bind="$attrs">
        <p>Coscom UI supports tree shaking for components, locales and themes. By default the component theme is light, locale is enUS, and no extra imports are needed.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<script>
  import { defineComponent } from 'vue'
  import { NConfigProvider, NInput, NDatePicker, NSpace } from '@coscom/coscom-ui'
  // theme
  import { createTheme, inputDark, datePickerDark } from 'naive-ui'
  // locale & dateLocale
  import { zhCN, dateZhCN } from 'naive-ui'

  export default defineComponent({
    components: {
      NConfigProvider,
      NInput,
      NDatePicker,
      NSpace
    },
    setup() {
      return {
        darkTheme: createTheme([inputDark, datePickerDark]),
        zhCN,
        dateZhCN
      }
    }
  })
<\/script>

<template>
    <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
        <n-space vertical>
            <n-input />
            <n-date-picker />
        </n-space>
    </n-config-provider>
</template>
<\/script> `,
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

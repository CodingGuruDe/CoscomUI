<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>readonly</i> is present, the value cannot be edited.</p>
    </DocSectionText>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readonly />
    </div>
    <DocSectionCode :code="code" hideCodeSandbox :dependencies="{ quill: '1.3.7' }" component="Editor" />
</template>

<script>
export default {
    data() {
        return {
            image: 'https://www.coscom.de/media/pages/home/e146836319-1715632732/coscom-ecosystem-illustration-1024x.webp',
            value: 'Das <div style="color: yellow"><b>COSCOM ECO-System</b></div> ist ein modulares Applikationssystem, basierend auf einer zentralen Datenplattform. Wo Sie einsteigen, bestimmen Sie!',
            code: {
                basic: `
<Editor v-model="value" editorStyle="height: 320px" readonly />
`,
                options: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readonly />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'Das COSCOM ECO-System ist ein modulares Applikationssystem, basierend auf einer zentralen Datenplattform. Wo Sie einsteigen, bestimmen Sie!'
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readonly />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('Das COSCOM ECO-System ist ein modulares Applikationssystem, basierend auf einer zentralen Datenplattform. Wo Sie einsteigen, bestimmen Sie!');
<\/script>
`
            }
        };
    }
};
</script>

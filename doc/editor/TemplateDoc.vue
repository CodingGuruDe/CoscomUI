<template>
    <DocSectionText v-bind="$attrs">
        <p>Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to <a href="http://quilljs.com/docs/modules/toolbar/">Quill documentation</a> for available controls.</p>
    </DocSectionText>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    <button v-tooltip.bottom="'Link'" class="ql-link"></button>
                </span>
            </template>
        </Editor>
    </div>
    <DocSectionCode :code="code" hideCodeSandbox :dependencies="{ quill: '1.3.7' }" component="Editor" />
</template>

<script>
export default {
    data() {
        return {
            image: 'https://montagearbeitsplatz.coscom.de/icons/statuses/status-8.png',
            value: '<div><b>COSCOM</b> Virtual Machining ist ein intelligentes Fertigungs-Prozessnetzwerk aus CAD/CAM-Software, Maschinensimulation, Toolmanagement, DNC- / CAM Datenmanagement sowie dem Cockpit für die Fertigung.</br>Wir analysieren die Ist-Situation Ihrer Fertigungsprozesse, identifizieren Optimierungsansätze in Digitalisierungsvorhaben über das Prozess-Consulting und erstellen einen erfolgreichen Umsetzungsplan für die Datenvernetzung und die Beschaffungs- und Logistikprozesse in der Planung und Fertigung der CNC-Zerspanung.</div>',
            code: {
                basic: `
<Editor v-model="value" editorStyle="height: 320px">
    <template v-slot:toolbar>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
            <button v-tooltip.bottom="'Image'" class="ql-image"></button>
        </span>
    </template>
</Editor>
`,
                options: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    <button v-tooltip.bottom="'Image'" class="ql-image"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '<div><b>COSCOM</b> Virtual Machining ist ein intelligentes Fertigungs-Prozessnetzwerk aus CAD/CAM-Software, Maschinensimulation, Toolmanagement, DNC- / CAM Datenmanagement sowie dem Cockpit für die Fertigung.</br>Wir analysieren die Ist-Situation Ihrer Fertigungsprozesse, identifizieren Optimierungsansätze in Digitalisierungsvorhaben über das Prozess-Consulting und erstellen einen erfolgreichen Umsetzungsplan für die Datenvernetzung und die Beschaffungs- und Logistikprozesse in der Planung und Fertigung der CNC-Zerspanung.</div>',
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(''<div><b>COSCOM</b> Virtual Machining ist ein intelligentes Fertigungs-Prozessnetzwerk aus CAD/CAM-Software, Maschinensimulation, Toolmanagement, DNC- / CAM Datenmanagement sowie dem Cockpit für die Fertigung.</br>Wir analysieren die Ist-Situation Ihrer Fertigungsprozesse, identifizieren Optimierungsansätze in Digitalisierungsvorhaben über das Prozess-Consulting und erstellen einen erfolgreichen Umsetzungsplan für die Datenvernetzung und die Beschaffungs- und Logistikprozesse in der Planung und Fertigung der CNC-Zerspanung.</div>',);
<\/script>
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            There are a lot of arguments that have gone on over the years around comments. Many are adamant that "good code comments itself", while others favor including good comments in their code and argue they should be required. When I read and
            hear these arguments going on, I've noticed they're frequently focussed on the What and How of the code...ie. What the code does, and How it does it. But very rarely does the concept of the Why enter the discussion...ie. Why was this code
            needed, or Why was it written this way. While there are valid arguments on either side, it can be difficult to know which direction to go. This lead me to create 3 rules I believe not only help to bridge the 2 sides, but also encourage
            better code to be written. I'd like to share my 3 rules with you in the hopes that they might help you as much as they have me. The name of a variable, parameter, interface, function, class, method, or some other thing in your code should
            provide sufficient information to clearly describe What that thing does or What value it holds. Another dev should be able to read the name of the thing weeks or months later and know exactly What it does or What it holds without needing
            to ask, look through additional code, or read additional documentation. If they do, the name should be changed to be more clear. To add some clarity here, it's important to note that the name is not responsible for describing what
            something is used for. The name is only responsible for describing What the thing does, or What value the thing holds.
            <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
            Only knowing this name, are you able to tell what kind of data will be held in this array? Clearly it holds something that's copied or adapted from something else...but is that enough information? Try to step back and think about what
            kinds of questions you'd be asking yourself or others if you came across this in some code you were working on.
            <DocSectionCode :code="code.options" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
const derivatives = [];
`,
                options: `
                function name(user) {
  // ...
}

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

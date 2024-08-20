<template>
    <DocSectionText>
        <p>JavaScript functions are written in camel case too. In addition, it's a best practice to actually tell what the function is doing by giving the function name a verb as prefix.</p>

        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />

        <p>This verb as prefix can be anything (e.g. get, fetch, push, apply, calculate, compute, post). It's yet another soft rule to consider for having more self-descriptive JavaScript variables.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// bad
function name(firstName, lastName) {
  return firstName} lastName;
}

// good
function getName(firstName, lastName) {
  return firstName} lastName;
}
`
            }
        };
    }
};
</script>

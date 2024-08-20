<template>
    <DocSectionText>
        <p>A JavaScript variable should be self-descriptive. It shouldn't be necessary to add a comment for additional documentation to the variable:</p>

        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />

        <p>Most often you will find JavaScript variables declared with a camelCase variable name with a leading lowercase character:</p>

        <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// bad
var value = 'Max';

// bad
var val = 'Max';

// good
var firstName = 'Max';
`
            },
            code2: {
                basic: `
// bad
var firstname = 'Max';

// bad
var first_name = 'Max';

// bad
var FIRSTNAME = 'Max';

// bad
var FIRST_NAME = 'Max';

// good
var firstName = 'Max';
`
            }
        };
    }
};
</script>

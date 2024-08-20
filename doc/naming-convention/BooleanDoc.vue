<template>
    <DocSectionText>
        <p>A prefix like is, are, or has helps every JavaScript developer to distinguish a boolean from another variable by just looking at it:</p>

        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />

        <p>In contrast to strings and integers, you can see it as another soft rule for a JavaScript boolean naming convention besides being written in camel case.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// bad
let visible = true;

// good
let isVisible = true;

// bad
let equal = false;

// good
let areEqual = false;

// bad
let encryption = true;

// good
let hasEncryption = true;
`
            }
        };
    }
};
</script>

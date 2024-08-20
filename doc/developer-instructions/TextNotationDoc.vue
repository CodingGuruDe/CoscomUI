<template>
    <DocSectionText>
        <p>
            Many resources emphasize using camelCase notation exclusively when writing in JavaScript. However, this is not entirely accurate. The recommendation is more about adhering to the notation used by the language itself. While a significant
            portion of the JavaScript language is written in camelCase, it is not universally so. Here are a few examples:
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>
            As we can see, JavaScript incorporates not only camelCase notation but also some others. All classes and constructor functions in JavaScript are written using PascalCase notation. When declaring custom classes and constructor functions,
            it is customary to follow the same naming convention as the language itself. The same applies to constants, representing fixed values. Both built-in JavaScript constants and those created by developers are conventionally named in
            UPPER_SNAKE_CASE. In contrast to some programming languages where the API is written using various cases without clear distribution, JavaScript's API does not suffer from this issue. Therefore, it is customary to adhere to the conventions
            present in the language itself.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
parseInt('18') // camelCase

new RegExp('[A-Z]', 'i') // PascalCase

Number.MAX_SAFE_INTEGER // PascalCase + UPPER_SNAKE_CASE
                `
            }
        };
    }
};
</script>

<template>
    <DocSectionText>
        <p>A JavaScript class is declared with a PascalCase in contrast to other JavaScript data structures:</p>

        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />

        <p>Every time a JavaScript constructor is called to instantiate a new instance of a class, the name of the class should appear in Pascal Case, because the class has been declared with Pascal Case in the first place.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

var me = new SoftwareDeveloper('Max', 'Musterman');
`
            }
        };
    }
};
</script>

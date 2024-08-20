<template>
    <DocSectionText>
        <p>Identical to JavaScript functions, a method on a JavaScript class is declared with camelCase:</p>

        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />

        <p>Here the same rules as for JavaScript functions apply -- e.g. adding a verb as a prefix --, for making the method name more self-descriptive.</p>
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

  getName() {
    return ${this.firstName} ${this.lastName};
  }
}

var me = new SoftwareDeveloper('Max', 'Musterman');

console.log(me.getName());
// "Max Musterman"
`
            }
        };
    }
};
</script>

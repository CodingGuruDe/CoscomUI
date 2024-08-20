<template>
    <DocSectionText>
        <p>
            Components are not everywhere in JavaScript, but commonly found in frontend frameworks like Vue. Since a component is kinda instantiated -- but appended to the DOM instead -- like a JavaScript class, they are widely declared with Pascal
            Case too.
        </p>

        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />

        <p>When a component gets used, it distinguishes itself from native HTML and web components, because its first letter is always written in uppercase.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// bad
function userProfile(user) {
  return (
    <div>
      <span>First Name: {user.firstName}</span>
      <span>Last Name: {user.lastName}</span>
    </div>
  );
}

// good
function UserProfile(user) {
  return (
    <div>
      <span>First Name: {user.firstName}</span>
      <span>Last Name: {user.lastName}</span>
    </div>
  );
}
`
            }
        };
    }
};
</script>

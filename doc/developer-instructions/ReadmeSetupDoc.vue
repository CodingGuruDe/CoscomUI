<template>
    <DocSectionText>
        <p>Suppose you are working with a network request library like axios, and the library's README recommends using the standard name axios for imports.</p>
        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>
            Changing the name from axios to httpRequester can cause confusion and errors, as other developers working on the project and expecting the standard name axios may encounter issues. Therefore, it is important to adhere to the
            recommendations set in the library's README to ensure compatibility and code understanding.<br /><br />
            At first glance, the example with the axios library may seem harmless, but similar renaming scenarios can arise with the use of more complex libraries and frameworks deeply integrated into a project. Teams that adopt meaningful renaming
            practices will need to create their own documentation because new team members will not find sufficient information in the official documentation to understand the changes in the technology's usage style. Typically, meaningful renaming
            into something more abstract, is used in conjunction with the dependency inversion principle. However, it is important to understand the fine line here. You and your team must have a clear understanding of what you are doing and why, as
            there needs to be a balance in adopting such practices.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import httpRequest from 'axios'

// Somewhere at the end of the file

httpRequest('https://rest.coscom.de/api/Token')
                `
            }
        };
    }
};
</script>

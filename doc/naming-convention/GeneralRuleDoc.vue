<template>
    <DocSectionText>
        <p>
            In JavaScript projects, there are numerous conventions, but the most valuable one to adhere to is maintaining a consistent coding style within a single project. Individuals involved in different projects know better than anyone that
            writing styles can vary significantly between projects.<br /><br />

            Despite the convention in the JavaScript language to write in camelCase, it is worth noting that nothing is preventing the use of, for instance, snake_case. As already mentioned, this notation might be more familiar to many other
            programming languages and some teams. There might be situations where a naming case different from the style of your application starts creeping into your code.<br /><br />

            It is not our place to judge whether using different naming cases is good or bad, as various reasons may drive such choices. However, explicit mixing of two or more naming cases can pose challenges. For new developers joining the project,
            understanding what is happening and deciding which naming case to use can become quite challenging.
        </p>

        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>
            There are several ways to address this issue, ranging from using renaming with destructuring, import renaming, using mapping functions (e.g., Array.prototype.map()), and more advanced approaches like utilizing the Adapter design pattern.
            The key is to adopt a consistent approach, not only in naming conventions but also in how tasks are accomplished. Whenever possible, prefer a single method for a particular action. Avoid forcing yourself and other developers to spend time
            and extra mental resources deciding which approach to use. Consider delegating such tasks, especially those related to coding style, to tools like ESLint.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// Bad 
const hasAccess = checkHasUserAccess(session.current_user) && checkIsPageVisible(session.current_page)

// Good
const hasAccess = checkHasUserAccess(session.currentUser) && checkIsPageVisible(session.currentPage)

// Also good, if such a naming case is preferred
const has_access = check_has_user_access(session.current_user) && check_is_page_visible(session.current_page)
`
            }
        };
    }
};
</script>

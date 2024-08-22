<template>
    <DocSectionText v-bind="$attrs">
        <p>List of class names used in the styled mode.</p>
    </DocSectionText>
    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Element</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>v-message</td>
                    <td>Container element.</td>
                </tr>
                <tr>
                    <td>v-message-info</td>
                    <td>Container element when displaying info messages.</td>
                </tr>
                <tr>
                    <td>v-message-warn</td>
                    <td>Container element when displaying warning messages.</td>
                </tr>
                <tr>
                    <td>v-message-error</td>
                    <td>Container element when displaying error messages.</td>
                </tr>
                <tr>
                    <td>v-message-success</td>
                    <td>Container element when displaying success messages.</td>
                </tr>
                <tr>
                    <td>v-message-close</td>
                    <td>Close icon.</td>
                </tr>
                <tr>
                    <td>v-message-icon</td>
                    <td>Severity icon.</td>
                </tr>
                <tr>
                    <td>v-message-text</td>
                    <td>Content of a message.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

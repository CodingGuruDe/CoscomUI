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
                    <td>v-autocomplete</td>
                    <td>Container element</td>
                </tr>
                <tr>
                    <td>v-autocomplete-panel</td>
                    <td>Overlay panel of suggestions.</td>
                </tr>
                <tr>
                    <td>v-autocomplete-items</td>
                    <td>List container of suggestions.</td>
                </tr>
                <tr>
                    <td>v-autocomplete-item</td>
                    <td>List item of a suggestion.</td>
                </tr>
                <tr>
                    <td>v-autocomplete-token</td>
                    <td>Element of a selected item in multiple mode.</td>
                </tr>
                <tr>
                    <td>v-autocomplete-token-icon</td>
                    <td>Close icon element of a selected item in multiple mode.</td>
                </tr>
                <tr>
                    <td>v-autocomplete-token-label</td>
                    <td>Label of a selected item in multiple mode.</td>
                </tr>
                <tr>
                    <td>v-autocomplete-empty-message</td>
                    <td>Container element when there is no suggestion to display.</td>
                </tr>
                <tr>
                    <td>v-overlay-open</td>
                    <td>Container element when overlay is visible.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

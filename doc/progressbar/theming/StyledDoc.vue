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
                    <td>v-progressbar</td>
                    <td>Container element.</td>
                </tr>
                <tr>
                    <td>v-progressbar-determinate</td>
                    <td>Container element of a determinate progressbar.</td>
                </tr>
                <tr>
                    <td>v-progressbar-indeterminate</td>
                    <td>Container element of an indeterminate progressbar.</td>
                </tr>
                <tr>
                    <td>v-progressbar-value</td>
                    <td>Element whose width changes according to value.</td>
                </tr>
                <tr>
                    <td>v-progressbar-label</td>
                    <td>Label element that displays the current value.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

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
                    <td>v-image</td>
                    <td>Container element.</td>
                </tr>
                <tr>
                    <td>v-image-preview-container</td>
                    <td>Container element with preview enabled.</td>
                </tr>
                <tr>
                    <td>v-image-preview-indicator</td>
                    <td>Mask layer over the image when hovered.</td>
                </tr>
                <tr>
                    <td>v-image-preview-icon</td>
                    <td>Icon of the preview indicator.</td>
                </tr>
                <tr>
                    <td>v-image-mask</td>
                    <td>Preview overlay container.</td>
                </tr>
                <tr>
                    <td>v-image-toolbar</td>
                    <td>Transformation options container.</td>
                </tr>
                <tr>
                    <td>v-image-action</td>
                    <td>An element inside the toolbar.</td>
                </tr>
                <tr>
                    <td>v-image-preview</td>
                    <td>Image element inside the preview overlay.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            CoscomFlex is a lightweight responsive CSS utility library to accompany CoscomUI libraries and static webpages as well. CoscomUI can be used with any CSS utility library like bootstrap and tailwind however PrimeFlex has benefits like
            integration with CoscomUI themes using CSS variables so that colors classes e.g. <i>bg-blue-500</i> receive the color code from the CoscomUI theme being used. CoscomUI follows the CSS utility approach of PrimeFlex and currently does not
            provide an extended style property like <i>sx</i>. Same approach is also utilized in CoscomBlocks for CoscomUI project as well.
        </p>

        <p>Here is an example to demonstrate how to align 3 buttons horizontally on bigger screens and display them as stacked on smaller ones.</p>
    </DocSectionText>
    <div class="card flex flex-column md:flex-row md:justify-content-between row-gap-3">
        <Button type="button" label="Button 1"></Button>
        <Button type="button" label="Button 2" severity="secondary"></Button>
        <Button type="button" label="Button 3" severity="help"></Button>
    </div>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
    <Button type="button" label="Button 1"></Button>
    <Button type="button" label="Button 2" severity="secondary"></Button>
    <Button type="button" label="Button 3" severity="help"></Button>
</div>
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Surface palette is used when designing the layers such as headers, content, footers, overlays and dividers. Surface palette varies between 0 - 900 and named surfaces are also available.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-column">
            <div class="border-round-lg shadow-sm border-1 border-gray-200">
                <div class="flex flex-col gap-1 p-2 sm:flex-row sm:gap-2">
                    <div v-for="shade of shades" :key="shade" class="group relative flex flex-column aspect-[3/1] w-full flex-1 flex-col gap-2 sm:aspect-[2/3] sm:h-auto sm:w-auto border-round-md" :style="{ aspectRatio: 2 / 3, color: '#000' }">
                        <div class="w-full flex-1 border-round-lg border-1 border-200" :style="{ backgroundColor: `var(--surface-${shade})`, color: '#000' }"></div>
                        <div class="flex w-full flex-col gap-1" style="justify-content: center">
                            <span class="hidden font-mono text-xs tabular-nums text-gray-500 transition-colors group-hover:text-foreground lg:flex">surface-{{ shade }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div
                v-for="shade in shades"
                :key="shade"
                class="w-18rem flex align-items-center p-3 font-bold"
                :style="{ backgroundColor: `var(--surface-${shade})`, color: $appState.darkTheme ? (shade > 500 ? '#000' : '#fff') : shade > 500 ? '#fff' : '#000' }"
            >
                surface-{{ shade }}
            </div> -->
        </div>
    </div>
    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>--surface-ground</td>
                    <td>Base ground color.</td>
                </tr>
                <tr>
                    <td>--surface-section</td>
                    <td>Background color of a section on a ground surface.</td>
                </tr>
                <tr>
                    <td>--surface-card</td>
                    <td>Color of a surface used as a card.</td>
                </tr>
                <tr>
                    <td>--surface-overlay</td>
                    <td>Color of overlay surfaces.</td>
                </tr>
                <tr>
                    <td>--surface-border</td>
                    <td>Color of a divider.</td>
                </tr>
                <tr>
                    <td>--surface-hover</td>
                    <td>Color of an element in hover state.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shades: [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        };
    }
};
</script>

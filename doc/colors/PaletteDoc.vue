<template>
    <DocSectionText v-bind="$attrs">
        <p>Colors palette consists of 13 main colors where each color provides tints/shades from 50 to 900.</p>
    </DocSectionText>
    <div class="card" style="height: auto">
        <div id="colors" class="gap-4" style="display: grid">
            <div v-for="color of colors" :key="color" :id="color" class="border-round-lg shadow-sm border-1 border-gray-200">
                <div class="flex items-center p-2 pb-0">
                    <div class="flex-1 pl-1 text-sm font-medium">
                        <h2 class="capitalize">{{ color }}</h2>
                    </div>
                </div>
                <div class="flex flex-col gap-1 p-2 sm:flex-row sm:gap-2">
                    <div v-for="shade of shades" :key="shade" class="group relative flex flex-column aspect-[3/1] w-full flex-1 flex-col gap-2 sm:aspect-[2/3] sm:h-auto sm:w-auto border-round-md" :style="{ aspectRatio: 2 / 3, color: '#000' }">
                        <div class="w-full flex-1 border-round-lg border-1 border-200" :style="{ backgroundColor: `var(--${color}-${shade})` }"></div>
                        <div class="flex w-full flex-col gap-1" style="justify-content: center">
                            <span class="hidden font-mono text-xs tabular-nums text-gray-500 transition-colors group-hover:text-foreground lg:flex">{{ color }}-{{ shade }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colors: ['primary', 'bluegray', 'gray', 'blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'purple', 'red'],
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        };
    }
};
</script>

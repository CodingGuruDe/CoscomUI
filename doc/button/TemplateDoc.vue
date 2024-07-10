<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside a button is defined as children.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Button outlined class="border-2">
            <svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 105 105" style="enable-background: new 0 0 105 105" xml:space="preserve">
                <circle cx="52.64" cy="52.5" r="50.33" style="fill: #ffed00; stroke: #ffed00" />
                <path
                    d="M72.48,23.16c0-1.48-1.2-2.69-2.69-2.69c-0.03,0-0.06,0.01-0.09,0.01v-0.01H41.08v0c-4.58,0.03-8.28,3.75-8.28,8.33  c0,0.03,0,0.05,0,0.08h0l0,47.3l0,0l0,0v0.24h0.01c0.12,4.36,3.59,7.88,7.93,8.08v0.02H69.7v-0.01c0.03,0,0.06,0.01,0.09,0.01  c1.48,0,2.69-1.2,2.69-2.69c0-0.14-0.02-0.28-0.04-0.42h0.04V70.97h-0.03c-0.16-1.33-1.28-2.36-2.65-2.36  c-0.03,0-0.06,0.01-0.09,0.01v-0.01h-7.56H54.6h-0.19c-1.42,0-2.58-1.15-2.58-2.58V39.71c0-1.42,1.15-2.58,2.58-2.58h0.19v0h15.1  v-0.01c0.03,0,0.06,0.01,0.09,0.01c1.48,0,2.69-1.2,2.69-2.69c0-0.02,0-0.03,0-0.05h0V23.16L72.48,23.16  C72.48,23.16,72.48,23.16,72.48,23.16z"
                />
            </svg>
        </Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button outlined class="border-2">
    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="var(--primary-color)" />
        <path d="..." fill="var(--text-color)" />
    </svg>
</Button>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button outlined class="border-2">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                    fill="var(--primary-color)"
                />
                <path
                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                    fill="var(--text-color)"
                />
            </svg>
        </Button>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Button outlined class="border-2">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                    fill="var(--primary-color)"
                />
                <path
                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                    fill="var(--text-color)"
                />
            </svg>
        </Button>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>

<style type="text/css">
.st0 {
    fill: #ffed00;
    stroke: #ffed00;
    stroke-width: 0.5763;
    stroke-miterlimit: 10;
}
</style>

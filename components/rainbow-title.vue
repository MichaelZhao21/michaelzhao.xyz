<script lang="ts">
/**
 * Creates a color changing title
 */
export default { name: 'RainbowTitle' };
</script>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true,
    },
});

const color = reactive({ hsl: 191, hsl2: 263 });
const colorStr = reactive({
    hsl: `hsl(${color.hsl}, 100%, 61%)`,
    hsl2: `hsl(${color.hsl}, 100%, 61%)`,
});

setInterval(() => {
    color.hsl++;
    color.hsl2++;
    colorStr.hsl = `hsl(${color.hsl}, 100%, 61%)`;
    colorStr.hsl2 = `hsl(${color.hsl2}, 100%, 61%)`;
}, 200);
</script>

<template>
    <h1>{{ text }}</h1>
</template>

<style scoped>
h1 {
    --primary: v-bind('colorStr.hsl');
    --secondary: v-bind('colorStr.hsl2');
}
</style>

<script lang="ts">
/**
 * Creates a link that looks like a button with colored text
 */
export default { name: 'ColorButtonLink' };
</script>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});

const style = `color: ${props.color}; --hover-border: 3px solid ${props.color}`;

</script>

<template>
    <a :style="style" :href="props.href">
        {{ text }}
    </a>
</template>

<style scoped>
a {
    background-color: #aaaaaa10;
    border-radius: 1rem;
    padding: 1rem 3rem;
    font-family: var(--title-font);
    font-size: 3rem;
    border: 3px solid transparent;
    width: 12rem;
    text-align: center;
    margin-bottom: 2.5rem;
}

a:hover {
    border: var(--hover-border);
}

</style>
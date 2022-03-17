<script lang="ts">
import { PropType } from 'vue';

/**
 * Section with a title and ItemList
 * Icons are stored at https://cdn.michaelzhao.xyz/images/<icon-name>.webp
 */
export default { name: 'ItemListSection' };
</script>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    list: {
        type: Array as PropType<string[]>,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: 'icon',
    },
});

const iconSrc = `https://cdn.michaelzhao.xyz/images/${props.icon}.webp`;
</script>

<template>
    <div class="title-box">
        <h2>{{ title }}</h2>
        <img :src="iconSrc" :alt="$props.alt" />
    </div>
    <ItemList :list="$props.list" />
</template>

<style scoped>
.title-box {
    display: flex;
    flex-direction: row;
}

img {
    width: 4rem;
    height: auto;
    object-fit: contain;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
}
</style>

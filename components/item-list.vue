<script lang="ts">
import { PropType } from 'vue';

/**
 * Creates an unordered list given string list of items.
 * Will also parse markdown-style links that start with http[s].
 * Link Format: [text](url)
 */
export default { name: 'ItemListSection' };
</script>

<script setup lang="ts">
const props = defineProps({
    list: {
        type: Array as PropType<string[]>,
        required: true,
    },
});

const itemList = props.list.map((item) =>
    item.replace(/\[(.*?)\]\((http.*?)\)/g, '<a href="$2">$1</a>')
);
</script>

<template>
    <ul>
        <li v-for="(item, index) in itemList" :key="index" v-html="item"></li>
    </ul>
</template>

<style scoped>
ul {
    padding-bottom: 1rem;
}

li {
    line-height: 1.3;
}
</style>

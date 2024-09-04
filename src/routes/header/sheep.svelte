<script lang="ts">
	export let left: number;
	export let top: number;
    export let flipped = false;
    export let small = false;
</script>

<img
	alt="sheep"
	src="/assets/sheep.png"
	width={small ? 100 : 150}
	style={`left: ${left}%; top: ${top}%; ${flipped && 'transform: scaleX(-1);'}`}
    class="sheep"
/>

<style>
    .sheep {
        position: absolute;
    }
</style>
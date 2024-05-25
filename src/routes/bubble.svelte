<script lang="ts">
	export let num: number;
	export let icon: string;
	export let y: number;
	export let href: string;
	export let biggerIcon = false;
</script>

<a class="bubble" style={`top: ${y}px`} {href} target="_blank">
	<img src={`imgs/bubble${num}.png`} alt={`bubble ${num}`} class="bubble-bg" />
	<img
		src={`imgs/${icon}.svg`}
		alt={`${icon} icon`}
		class={`bubble-text ${biggerIcon ? 'bigger' : ''}`}
	/>
</a>

<style>
	.bubble {
		width: 12vw;
		height: 12vw;
		position: relative;
		cursor: pointer;
		transition-duration: 200ms;
		background-color: transparent;
		border: none;
	}

	.bubble:hover {
		transform: scale(1.1);
	}

	.bubble-bg {
		width: 12vw;
		height: 12vw;
	}

	.bubble-text {
		position: absolute;
		width: 5vw;
		height: 5vw;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.bigger {
		width: 6vw;
		height: 6vw;
	}

	/* Anything less than 1200 (tablets) */
	@media only screen and (max-width: 1200px) {
		.bubble,
		.bubble-bg {
			width: 18vw;
			height: 18vw;
		}

		.bubble-text {
			width: 8vw;
			height: 8vw;
		}

		.bigger {
			width: 9.5vw;
			height: 9.5vw;
		}
	}
</style>

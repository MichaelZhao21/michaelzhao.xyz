<script>
	import Interest from './interest.svelte';
</script>

<div class="grid">
	<Interest icon="settings">Learning Rust (again) for a *secret project*</Interest>
	<Interest icon="kid_star">Reading about Rank Aggregation</Interest>
	<Interest icon="directions_run">Tryna run a 5k</Interest>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 15vw;
	}

	/* Anything less than 1200 (landscape tablets) */
	@media only screen and (max-width: 1200px) {
		.grid {
			padding: 0 5vw;
		}
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
            padding: 0;
        }
	}
</style>

<script>
	import Interest from './interest.svelte';
</script>

<div class="grid">
	<Interest icon="fact_check">Creating a desktop app with Qt6</Interest>
	<Interest icon="hotel_class">Researching Rank Aggregation</Interest>
	<Interest icon="draw">Writing more Blog Posts</Interest>
	<Interest icon="menu_book">Reading more nonfiction books</Interest>
	<Interest icon="skillet">Cooking good food</Interest>
	<Interest icon="explosion">Taking a class on Quantum Computing</Interest>
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

<script>
	import Interest from './interest.svelte';
</script>

<div class="grid">
	<Interest icon="settings">Using Tauri to build a desktop app</Interest>
	<Interest icon="kid_star">Researching Rank Aggregation</Interest>
	<Interest icon="music_note">Learning to play guitar</Interest>
	<Interest icon="menu_book">Reading more nonfiction books</Interest>
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

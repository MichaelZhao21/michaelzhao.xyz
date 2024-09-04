<script lang="ts">
	export let icon: string;
</script>

<div class="int">
	<div class="icon material-symbols-outlined">{icon}</div>
	<p class="text"><slot /></p>
</div>

<style>
	.int {
		display: flex;
		flex-direction: row;
		font-size: 1.5rem;
		color: #373c3e;
        padding: 0.5rem 1rem;
		align-items: center;
	}

	.icon {
		margin-right: 0.5rem;
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
        .int {
            font-size: 1rem;
        }
    }
</style>

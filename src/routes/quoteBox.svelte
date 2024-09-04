<script lang="ts">
	import data from '../data.json';

	const quoteNum = Math.floor(Math.random() * data.quotes.length);
	let quoteDisplay = data.quotes[quoteNum];
</script>

<div class="container">"{quoteDisplay.text}" - {quoteDisplay.author}</div>

<style>
	.container {
		background-color: var(--background-light);
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		border-radius: 0.5rem;
		margin: 1rem 20%;
		padding: 1rem;
		font-size: 1.25rem;
        text-align: center;
		color: #a46e48;
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
		.container {
            margin: 1rem 0.5rem;
            font-size: 1.125rem;
		}
	}
</style>

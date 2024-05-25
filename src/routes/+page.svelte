<script>
	import Hero from "./hero.svelte";
	import Navbar from "./navbar.svelte";

</script>

<svelte:head>
	<title>Michael Zhao</title>
	<meta name="description" content="This is my personal website!" />
</svelte:head>

<Hero />

<Navbar />

<h1 class="name">Michael Zhao</h1>

<style>
	.name {
        max-width: fit-content;
        float: right;
		margin-right: 2rem;
		margin-top: 1rem;
		font-size: 6rem;
		font-family: 'Indie Flower', 'Courier New', Courier, monospace;
        color: white;
        filter: drop-shadow(3px 3px 0 #3F82BF);
	}

    /* Anything less than 1200 (landscape tablets) */
    @media only screen and (max-width: 1200px) {
		.name {
			font-size: 5rem;
			margin-top: 0.5rem;
		}
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
		.name {
			font-size: 3.5rem;
			margin-top: 0;
			margin-right: 1rem;
		}
	} 
</style>

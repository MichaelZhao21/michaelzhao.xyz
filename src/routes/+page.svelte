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
</style>

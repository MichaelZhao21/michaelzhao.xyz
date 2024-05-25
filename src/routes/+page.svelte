<script>
	import Bubbles from './header/bubbles.svelte';
	import Hero from './header/hero.svelte';
	import Navbar from './navbar.svelte';
</script>

<svelte:head>
	<title>Michael Zhao</title>
	<meta name="description" content="This is my personal website!" />
</svelte:head>

<Hero />

<Navbar />

<h1 class="name">Michael Zhao</h1>

<Bubbles />

<div class="header-spacing"></div>

<p class="intro">
	Hi! I'm Michael, a graduate student studying computer science at UTD. On my own time, I like to
	work on personal projects through code and art :D
</p>

<p class="footer">Thanks for visiting! - 🧡 Mikey :D</p>

<style>
	.name {
		max-width: fit-content;
		float: right;
		margin-right: 2rem;
		margin-top: 1rem;
		font-size: 6rem;
		font-family: 'Indie Flower', 'Courier New', Courier, monospace;
		color: white;
		filter: drop-shadow(3px 3px 0 #3f82bf);
	}

	.header-spacing {
		width: 100%;
		height: 62vw;
	}

	.intro {
		margin-top: 1rem;
		padding: 0 1rem;
		text-align: center;
		color: #A46E48;
	}

	.footer {
		color: #A58A77;
		padding-left: 0.5rem;
		padding-bottom: 0.5rem;
		padding-top: 1rem;
	}

	/* Anything less than 1200 (landscape tablets) */
	@media only screen and (max-width: 1200px) {
		.name {
			font-size: 5rem;
			margin-top: 0.5rem;
		}

		.header-spacing {
			height: 50rem;
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

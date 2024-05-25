<svelte:head>
	<title>Michael Zhao</title>
	<meta name="description" content="This is my personal website!" />
</svelte:head>

<div class="hero">
	<img src="/imgs/landscape.png" alt="landscape background" class="cover" />
	<div class="cover-grad"></div>
</div>

<div class="navbar">
	<button class="nb-item">about me</button>
	<button class="nb-item">projects</button>
</div>

<h1 class="name">Michael Zhao</h1>

<style>
	.hero {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: -10;
	}

	.cover {
		width: 100%;
		margin-top: -5rem;
		display: block;
	}

	.cover-grad {
		width: 100%;
		height: 5rem;
		background: linear-gradient(#a6dba6, #f6ede7);
	}

	.navbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		padding: 1rem 0;
		position: fixed;
		top: 0;
		left: 1rem;
	}

	.nb-item {
		height: max-content;
		border: none;
		background-color: transparent;
		font-weight: bold;
		font-size: 1.75rem;
		font-family: 'Rubik', 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: #042187;
		cursor: pointer;
		transition-duration: 200ms;
		margin: 0 1rem;
	}

	.nb-item:hover {
		transform: scale(1.05);
		color: #2e5cff;
	}

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

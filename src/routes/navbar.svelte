<div class="navbar">
	<button class="nb-item">about me</button>
	<button class="nb-item">projects</button>
</div>

<style>
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
</style>

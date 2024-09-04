<script>
	import Project from './project.svelte';
</script>

<div class="cont">
	<div class="line-group">
		<img src="/imgs/semicircle.svg" alt="o" class="u u-top" />
		<div class="line"></div>
		<img src="/imgs/semicircle.svg" alt="o" class="u u-bottom" />
	</div>
	<div class="proj-list">
		<Project
			name="tcc"
			date="Oct 2023 - Sept 2024"
			display="TAMS Club Calendar"
			description="The TAMS Club Calendar is a fully contained event tracker, club/volunteering database, and general resource center. This is the unofficial club event calendar for the Texas Academy of Mathematics and Science (TAMS) student organizations!"
			roles="Creator, Developer, Designer"
			color="00BB00"
		/>
	</div>
</div>

<style>
	.cont {
		display: flex;
		flex-direction: row;
		padding-left: 1rem;
	}
	.line {
		width: 3px;
		background-color: var(--lighter);
		flex-grow: 1;
	}

	.u {
		width: 1.5rem;
	}

	.u-bottom {
		transform: rotate(180deg);
	}

	.line-group {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.proj-list {
		padding-top: 1rem;
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
		.cont {
			padding-left: 0.5rem;
		}
	}
</style>

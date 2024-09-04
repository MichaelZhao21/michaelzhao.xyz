<script>
	import Project from './project.svelte';
	import data from '../../data.json';
</script>

<div class="cont">
	<div class="line-group">
		<img src="/assets/semicircle.svg" alt="o" class="u u-top" />
		<div class="line"></div>
		<img src="/assets/semicircle.svg" alt="o" class="u u-bottom" />
	</div>
	<div class="proj-list">
		{#each data.projects as d}
			<Project
				name={d.name}
				date={d.date}
				display={d.display}
				description={d.description}
				roles={d.position}
				color={d.color}
				url={d.href}
			/>
		{/each}
	</div>
</div>
<div class="others-cont">
	<p class="others">...and a lot more :D</p>
	<p class="others">See my Github for ALL the lil projects and unfinished code bits I've done!</p>
</div>

<style>
	.cont {
		display: flex;
		flex-direction: row;
		padding-left: 22rem;
		margin-bottom: 2rem;
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
		padding: 1rem 0;
	}

	.others {
		color: var(--text-accent);
		text-align: center;
	}

	.others-cont {
		margin-bottom: 2rem;
	}

	/* Anything less than 1200 (landscape tablets) */
	@media only screen and (max-width: 1200px) {
		.cont {
			padding-left: 8rem;
		}
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
		.cont {
			padding-left: 0.5rem;
		}
	}
</style>

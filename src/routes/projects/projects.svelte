<script>
	import Project from './project.svelte';
</script>

<div class="cont">
	<div class="line-group">
		<img src="/assets/semicircle.svg" alt="o" class="u u-top" />
		<div class="line"></div>
		<img src="/assets/semicircle.svg" alt="o" class="u u-bottom" />
	</div>
	<div class="proj-list">
		<Project
			name="tcc"
			date="Oct 2023 - Sept 2024"
			display="TAMS Club Calendar"
			description="The TAMS Club Calendar is a fully contained event tracker, club/volunteering database, and general resource center. This is the unofficial club event calendar for the Texas Academy of Mathematics and Science (TAMS) student organizations!"
			roles="Creator, Developer, Designer"
			color="00BB00"
			url="https://tams.club"
		/>
		<Project
			name="jury"
			date="Dec 2022 - Present"
			display="Jury (Hackathon Judging Platform)"
			description="A project designed to create a new pairwise judging system using modern technologies aimed at optimizing the user experience of judges and admin users. Using the same underlying statistical models and paper as Gavel, Jury is trying to deliver the best possible experience to everyone at the end of a grueling hackathon."
			roles="Creator, Developer, Designer"
			color="00ACE6"
			url="https://jury.mikz.dev"
		/>
	</div>
</div>
<p class="others">...and a lot more :D</p>
<p class="others">See my Github for ALL the lil projects and unfinished code bits I've done!</p>

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
		font-size: 1.5rem;
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

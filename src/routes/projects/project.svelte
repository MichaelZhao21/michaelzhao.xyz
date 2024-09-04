<script lang="ts">
	export let date: string;
	export let name: string;
	export let display: string;
	export let roles: string;
	export let description: string;
	export let color: string;
	export let url: string;
</script>

<div class="project">
	<div class="date-cont">
		<img src="/imgs/circle.svg" alt="o" class="circle" />
		<p class="date">{date}</p>
	</div>
	<div class="web-date-cont">
		<p class="web-date">{date}</p>
		<img src="/imgs/circle.svg" alt="o" class="web-circle" />
	</div>
	<div class="right">
		<a href={url}>
			<img
				src={`/imgs/${name}.jpg`}
				alt={`project ${name} thumbnail`}
				class="thumb"
				style={`border-color: #${color}`}
			/>
		</a>
		<div class="desc">
			<h2 class="title" style={`color: #${color}`}>{display}</h2>
			<h3 class="subtitle">{roles}</h3>
			<p class="notes">{description}</p>
		</div>
	</div>
</div>

<style>
	.project {
		display: flex;
		flex-direction: row;
		margin-bottom: 2rem;
	}

	.web-date-cont {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: -23rem;
	}

	.web-date {
		font-size: 1.5rem;
		color: var(--text-accent-light);
		width: 20rem;
		text-align: right;
	}

	.web-circle {
		height: 1.5rem;
		margin-left: 1.5rem;
	}

	.date-cont {
		display: none;
		flex-direction: row;
		align-items: center;
	}

	.date {
		font-size: 1.5rem;
		color: var(--text-accent-light);
		padding-left: 2rem;
	}

	.right {
		padding-top: 0.75rem;
		padding-left: 2.5rem;
		display: flex;
		flex-direction: row;
	}

	.thumb {
		border: 5px solid white;
		border-radius: 10px;
		height: 15rem;
		transition-duration: 200ms;
	}

	.thumb:hover {
		transform: scale(1.05);
	}

	.circle {
		height: 1.5rem;
		margin-left: -23.7px;
	}

	.desc {
		padding-left: 1rem;
	}

	.title {
		font-size: 1.75rem;
		font-family: 'Rubik', 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: bold;
	}

	.subtitle {
		font-size: 1.25rem;
		margin-bottom: 0.75rem;
		color: var(--text-accent-light);
	}

	.notes {
		font-size: 1.15rem;
	}

	/* Anything less than 1200 (landscape tablets) */
	@media only screen and (max-width: 1200px) {
		.web-date-cont {
			margin-left: -13rem;
		}
		.web-date {
			width: 10rem;
		}
		.thumb {
			height: 8rem;
			border-width: 3px;
		}
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
		.web-date-cont {
			display: none;
		}

		.date-cont {
			display: flex;
		}
		.project {
			flex-direction: column;
		}

		.right {
			padding-left: 0;
			flex-direction: column;
			padding-left: 1.25rem;
		}

		.date {
			font-size: 1.125rem;
			padding-left: 1.25rem;
		}

		.desc {
			padding-left: 0;
			padding-top: 1rem;
		}

		.thumb {
			display: block;
			width: 15rem;
			height: 9rem;
			border-width: 3px;
			border-radius: 9px;
		}

		.title {
			font-size: 1.25rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}
	}
</style>

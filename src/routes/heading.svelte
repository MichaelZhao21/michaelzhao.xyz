<script lang="ts">
	export let start: string;
	export let end: string;
</script>

<h1 class="heading" style={`background-image: -webkit-linear-gradient(#${start}, #${end});`}>
	<slot />
</h1>

<style>
	.heading {
		font-size: 2.5rem;
		font-family: 'Rubik', 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		width: max-content;
        margin-top: 2rem;
        margin-bottom: 1rem;
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
        .heading {
            font-size: 2rem;
        }
    }
</style>

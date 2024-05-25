<script>
	import Bubble from './bubble.svelte';
</script>

<div class="bubble-container">
	<Bubble num={1} icon={'github'} y={20} href="https://github.com/MichaelZhao21" />
	<Bubble num={2} icon={'linkedin'} y={-30} href="https://linkedin.com/in/MichaelZhao21" />
	<Bubble num={3} icon={'resume'} y={10} biggerIcon href="https://cdn.michaelzhao.xyz/resume.pdf" />
	<Bubble num={4} icon={'mail'} y={-16} biggerIcon href="mailto:michaelzhao314@gmail.com" />
</div>

<style>
    .bubble-container {
        display: flex;
        flex-direction: row;
        flex-basis: 20%;
        width: 100%;
        justify-content: space-evenly;
        position: absolute;
        top: 43vw;
    }

    /* Anything less than 1200 (tablets) */
    @media only screen and (max-width: 1200px) {
        .bubble-container {
            top: 36rem;
        }
    }

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
        .bubble-container {
            top: 40rem;
        }
    }

</style>

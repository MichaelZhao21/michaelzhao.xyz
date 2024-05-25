<script>
	import Sheep from "./sheep.svelte";

</script>
<div class="hero">
	<img src="/imgs/landscape.png" alt="landscape background" class="cover" />
	<div class="cover-grad"></div>

    <div class="sheep-cont">
        <Sheep left={2} top={51} />
        <Sheep left={50} top={40} />
        <Sheep left={27} top={38} flipped />
        <Sheep left={18} top={45} />
        <Sheep left={40} top={50} flipped />
        <Sheep left={60} top={43} flipped />
        <Sheep left={76} top={48} />
        <Sheep left={10} top={38} />
        <Sheep left={88} top={43} small flipped />
        <Sheep left={72} top={39} small />
    </div>
</div>

<style>
	.hero {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: -10;
        overflow-x: hidden;
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

    .sheep-cont {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        aspect-ratio: 40 / 25;
        z-index: 1;
    }

    /* Anything less than 1200 (tablets) */
    @media only screen and (max-width: 1200px) {
        .cover {
            max-width: 1200px;
            width: auto;
            height: auto;
            margin-top: 0;
        }

        .sheep-cont {
            width: 1200px;
            height: 900px;
        }
    }
</style>

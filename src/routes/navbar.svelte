<script>
	import { fade, slide } from "svelte/transition";

	let popupOpen = false;

	function toggleMenu() {
		popupOpen = !popupOpen;
	}

    function closeMenu() {
        popupOpen = false;
    }
</script>

<!-- Navbar -->
<div class="navbar">
	<button class="nb-item">about me</button>
	<button class="nb-item">projects</button>
	<button class="nb-item">workshops</button>
	<button class="nb-item">fun links</button>
</div>

<!-- Hamburger menu (only shown on mobile) -->
<button class="hamburger" on:click={toggleMenu}>
	<div class="hb-bar"></div>
	<div class="hb-bar"></div>
	<div class="hb-bar"></div>
</button>

<!-- Hamburger menu popup -->
{#if popupOpen}
	<div class="hb-popup" in:slide out:slide>
		<button class="nb-item hb-item">about me</button>
		<button class="nb-item hb-item">projects</button>
		<button class="nb-item hb-item">workshops</button>
		<button class="nb-item hb-item">fun links</button>
        <button class="hb-x" on:click={toggleMenu}>x</button>
	</div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="hb-close-popup" in:fade out:fade on:click={closeMenu}></div>
{/if}

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

	.hamburger {
		flex-direction: column;
		border: none;
		background: transparent;
		cursor: pointer;
		position: fixed;
		top: 1rem;
		left: 1rem;
		display: none;
	}

	.hb-bar {
		width: 30px;
		height: 5px;
		background-color: #042187;
		transition-duration: 200ms;
		border-radius: 100px;
		margin: 2.5px 0;
		cursor: pointer;
	}

	.hamburger:hover .hb-bar {
		background-color: #2e5cff;
	}

    .hb-popup {
        background-color: #f6ede7;
        filter: drop-shadow(0 5px 4px #BBBBBB);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 10;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .hb-item {
        margin: 0;
        padding: 0.5rem 1rem;
    }
    
    .hb-x {
		border: none;
		background-color: transparent;
		font-weight: bold;
		font-size: 1.75rem;
		font-family: 'Rubik', 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: #E3D1C5;
		cursor: pointer;
		transition-duration: 200ms;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
    }
    
    .hb-x:hover {
        color: #A46E48;
    }
    .hb-close-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9;
        background-color: #00000033;
    }

	/* Anything less than 1200 (tablets) */
	@media only screen and (max-width: 1200px) {
		.navbar {
			display: none;
		}

		.hamburger {
			display: flex;
		}
	}

	/* Anything less than 768 (phones, vertical tablets) */
	@media only screen and (max-width: 768px) {
		.hamburger {
			top: 0.5rem;
			left: 0.5rem;
		}
        .hb-item {
            font-size: 1.5rem;
        }
	}
</style>

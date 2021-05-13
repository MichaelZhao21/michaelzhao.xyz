<template>
    <div class="home">
        <img class="background" src="../assets/background.jpg" />
        <div class="name-box">
            <h1 id="name">Michael Zhao</h1>
            <p id="tagline">programmer · designer · artist</p>
        </div>
        <div class="background-fade"></div>
        <GithubLogo id="github-logo" class="logo" />
    </div>
</template>

<script>
import GithubLogo from '../assets/logos/github.vue';
export default { name: 'Home', components: { GithubLogo } };
</script>

<style scoped>
h1 {
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 6rem;
    color: white;
}

h2 {
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 4rem;
    background-clip: text;
}

p {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 1rem;
    color: #888;
}

.home {
    width: 100%;
    height: 100%;
    position: relative;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;

    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center top;
}

.background-fade {
    height: 25vh;
    width: 100vw;
    position: absolute;
    top: 75vh;
    left: 0;

    background: linear-gradient(180deg, #21212100, #212121);
}

.name-box {
    width: 65vw;
    height: 40vh;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -9;
    margin: -20vh 0 0 -32.5vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #00000088;
}

#name {
    margin: 0.5rem 0;
}

#tagline {
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 2rem;
    color: #9bf3ff;
}

.logo {
    display: none;
    /* Temporary lol */
}
</style>

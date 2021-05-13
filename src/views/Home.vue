<template>
    <div class="home">
        <div class="home-top">
            <div class="navbar">
                <a class="nav-link" href="#about-me">about me</a>
                <a class="nav-link" href="#recent-posts">recent posts</a>
                <a class="nav-link" href="#my-technology">my tech</a>
                <a class="nav-link" href="#cool-stuff">cool stuff</a>
                <a class="nav-link" href="/blog">blog</a>
            </div>
            <img class="background" src="../assets/background.jpg" />
            <div class="name-box">
                <h1 id="name">Michael Zhao</h1>
                <p id="tagline">programmer · designer · artist</p>
            </div>
            <div class="background-fade"></div>
        </div>
        <div class="bottom-content">
            <h2 id="about-me">About Me</h2>
            <div class="about-container">
                <div class="about-left">
                    <p class="description">
                        Hi! I’m a full-time student and code for fun :)) I mostly work on frontend
                        UI/UX design projects, as well as full-stack applications and services. I
                        also love drawing and exploring new mediums, as well as cooking whenever I
                        get the opportuntity to. Feel free to shoot me an email or message, and I’ll
                        be happy to talk to you!
                    </p>
                    <p class="email">
                        Email:
                        <a class="email-a" href="mailto:me@michaelzhao.xyz">me@michaelzhao.xyz</a>
                    </p>
                    <div class="link-logo-container">
                        <GithubLogo id="github-logo" class="logo" />
                        <LinkedInLogo id="linkedin-logo" class="logo" />
                    </div>
                </div>
                <img class="about-img" v-bind:src="aboutImg" alt="My picture!" />
            </div>
        </div>
    </div>
</template>

<script>
import GithubLogo from '../assets/logos/github.vue';
import LinkedInLogo from '../assets/logos/linkedin.vue';
import aboutImg from '../assets/face.png';

export default {
    name: 'Home',
    components: { GithubLogo, LinkedInLogo },
    data() {
        return {
            aboutImg,
        };
    },
};
</script>

<style scoped>
@import './Home.css';
</style>

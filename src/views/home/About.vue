<template>
    <h2 id="about-me">About Me</h2>
    <div class="about-container">
        <div class="about-left">
            <p class="description">
                Hi! I’m a full-time student and code for fun :)) I mostly work on frontend UI/UX
                design projects, as well as full-stack applications and services. I also love
                drawing and exploring new mediums, as well as cooking whenever I get the
                opportuntity to. Feel free to shoot me an email or message, and I’ll be happy to
                talk to you!
            </p>
            <p class="email">
                Email:
                <a class="email-a" href="mailto:me@michaelzhao.xyz">me@michaelzhao.xyz</a>
            </p>
            <div class="link-logo-container">
                <a href="https://github.com/MichaelZhao21" class="logo-link">
                    <GithubLogo id="github-logo" class="logo" />
                </a>
                <a href="https://www.linkedin.com/in/michael-zhao-2021/" class="logo-link">
                    <LinkedInLogo id="linkedin-logo" class="logo" />
                </a>
            </div>
        </div>
        <img class="about-img" v-bind:src="aboutImg" alt="My picture!" />
    </div>
</template>

<script>
import GithubLogo from '@/assets/logos/github.vue';
import LinkedInLogo from '@/assets/logos/linkedin.vue';
import aboutImg from '@/assets/face.png';

export default {
    name: 'About',
    components: { GithubLogo, LinkedInLogo },
    data() {
        return {
            aboutImg,
        };
    },
};
</script>

<style scoped>
@import './About.css';
</style>

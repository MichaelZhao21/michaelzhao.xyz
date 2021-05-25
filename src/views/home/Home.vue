<template>
    <div class="home">
        <div class="home-top">
            <div id="navbar">
                <a class="nav-link" href="#about-me">about me</a>
                <a class="nav-link" href="#recent-posts">recent posts</a>
                <a class="nav-link" href="#my-technology">my tech</a>
                <a class="nav-link" href="#cool-stuff">cool stuff</a>
                <a class="nav-link" href="/blog">blog</a>
            </div>
            <hamburger id="hamburger" v-on:click="dropdown = !dropdown"></hamburger>
            <div id="mobile-navbar" v-bind:class="dropdown ? 'dropdown' : ''">
                <a class="mobile-nav-link" href="#about-me">about me</a>
                <a class="mobile-nav-link" href="#recent-posts">recent posts</a>
                <a class="mobile-nav-link" href="#my-technology">my tech</a>
                <a class="mobile-nav-link" href="#cool-stuff">cool stuff</a>
                <a class="mobile-nav-link" href="/blog">blog</a>
            </div>
            <img class="background" src="@/assets/background.webp" />
            <div class="name-box">
                <h1 id="name">Michael Zhao</h1>
                <p id="tagline">programmer · designer · artist</p>
            </div>
            <div class="background-fade"></div>
        </div>
        <div class="bottom-content">
            <about></about>
            <recent-posts></recent-posts><br />
            <my-tech></my-tech><br />
            <cool-stuff></cool-stuff><br />
        </div>
    </div>
</template>

<script>
import About from './About.vue';
import CoolStuff from './CoolStuff.vue';
import MyTech from './MyTech.vue';
import RecentPosts from './RecentPosts.vue';
import Hamburger from '../../assets/hamburger.vue';

const headers = ['navbar', 'about-me', 'recent-posts', 'my-tech', 'cool-stuff'];

export default {
    name: 'Home',
    components: { About, RecentPosts, CoolStuff, MyTech, Hamburger },
    mounted,
    data: function() {
        return {
            dropdown: false,
        };
    },
};

async function mounted() {
    const observer = new IntersectionObserver(observerCallback, { rootMargin: '5% 0px -70%' });
    headers.forEach((h) => {
        const el = document.getElementById(h);
        if (el === null) return;
        observer.observe(el);
    });
}

let prevInt = null;

function observerCallback(e) {
    if (e[0].isIntersecting) {
        const id = e[0].target.id;
        prevInt = e[0];
        updateHash(id);
    } else {
        if (
            prevInt !== null &&
            prevInt.target.id === e[0].target.id &&
            prevInt.isIntersecting &&
            prevInt.boundingClientRect.top < e[0].boundingClientRect.top
        ) {
            const upperId = headers[headers.indexOf(e[0].target.id) - 1];
            updateHash(upperId);
        }
    }
}

function updateHash(id) {
    if (id === 'navbar') history.pushState({}, '', window.origin);
    else history.pushState({}, '', `#${id}`);
}
</script>

<style scoped>
@import './Home.css';
</style>

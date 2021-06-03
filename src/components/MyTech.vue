<template>
    <h2 id="my-tech">My Technology</h2>
    <h3>What I've used...</h3>
    <div class="icon-grid">
        <a href="https://reactjs.org/" class="logo-link">
            <react-logo class="logo logo-tech"></react-logo>
        </a>
        <a href="https://aws.amazon.com/" class="logo-link">
            <aws-logo class="logo logo-tech white"></aws-logo>
        </a>
        <a href="https://nginx.org/en/" class="logo-link">
            <nginx-logo class="logo logo-tech"></nginx-logo>
        </a>
        <a href="https://expressjs.com/" class="logo-link">
            <express-logo class="logo logo-tech white"></express-logo>
        </a>
        <a href="https://www.mongodb.com/" class="logo-link">
            <mongodb-logo class="logo logo-tech white"></mongodb-logo>
        </a>
        <a href="https://en.wikipedia.org/wiki/HTML5" class="logo-link">
            <html-logo class="logo logo-tech white"></html-logo>
        </a>
        <a href="https://en.wikipedia.org/wiki/CSS" class="logo-link">
            <css-logo class="logo logo-tech white"></css-logo>
        </a>
        <a href="https://github.com/" class="logo-link">
            <github-logo class="logo logo-tech"></github-logo>
        </a>
    </div>
    <h3>What I'm learning...</h3>
    <div class="icon-grid">
        <a href="https://www.gnu.org/software/bash/" class="logo-link">
            <bash-logo class="logo logo-tech"></bash-logo>
        </a>
        <a href="https://www.typescriptlang.org/" class="logo-link">
            <typescript-logo class="logo logo-tech"></typescript-logo>
        </a>
        <a href="https://www.ruby-lang.org/en/" class="logo-link">
            <ruby-logo class="logo logo-tech"></ruby-logo>
        </a>
        <a href="https://lisp-lang.org/" class="logo-link">
            <lisp-logo class="logo logo-tech"></lisp-logo>
        </a>
        <a href="https://vuejs.org/" class="logo-link">
            <vue-logo class="logo logo-tech"></vue-logo>
        </a>
    </div>
    <p id="learning-more-text">...and always learning more about everything I've used!</p>
</template>

<script>
import ReactLogo from '@/assets/logos/react.vue';
import AwsLogo from '@/assets/logos/aws.vue';
import NginxLogo from '@/assets/logos/nginx.vue';
import ExpressLogo from '@/assets/logos/express.vue';
import MongodbLogo from '@/assets/logos/mongodb.vue';
import HtmlLogo from '@/assets/logos/html.vue';
import CssLogo from '@/assets/logos/css.vue';
import GithubLogo from '@/assets/logos/github1.vue';
import BashLogo from '@/assets/logos/bash.vue';
import TypescriptLogo from '@/assets/logos/typescript.vue';
import RubyLogo from '@/assets/logos/ruby.vue';
import LispLogo from '@/assets/logos/lisp.vue';
import VueLogo from '@/assets/logos/vue.vue';

export default {
    name: 'MyTech',
    components: {
        ReactLogo,
        AwsLogo,
        NginxLogo,
        ExpressLogo,
        MongodbLogo,
        HtmlLogo,
        CssLogo,
        GithubLogo,
        BashLogo,
        TypescriptLogo,
        RubyLogo,
        LispLogo,
        VueLogo,
    },
};
</script>

<style scoped>
@import './MyTech.css';
</style>

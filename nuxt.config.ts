import { defineNuxtConfig } from 'nuxt3';

const description =
    "Hi! I'm an undergraduate computer science student studying at the University of Texas at Dallas. I enjoy coding for fun whenever I get the chance, mostly working on frontend UI/UX design projects, as well as full-stack applications and services. In my free time, I love drawing and creating art. I've done quite a bit of traditional sketching and some painting, but I'm trying to get into digital art this year. I also cook whenever I get the opportunity to! Feel free to shoot me an email or message, and I'll be happy to talk to you :DD";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Michael Zhao',
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
            { name: 'title', content: "Michael Zhao's Personal Website" },
            { name: 'author', content: 'Michael Zhao' },
            { name: 'description', content: description },
            {
                name: 'keywords',
                content:
                    'profile,coding,student,developer,ui/ux,javascript,java,c++,c,python,react,art,fullstack,',
            },
            { property: 'og:title', content: "Michael Zhao's Personal Website" },
            { property: 'og:url', content: 'https://michaelzhao.xyz' },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: description },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: "Michael Zhao's Personal Website" },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: 'https://cdn.michaelzhao.xyz/social-cover.webp' },
        ],
        link: [
            { rel: 'stylesheet', href: 'main.css' },
            { rel: 'favicon', type: 'image/x-icon', href: 'favicon.ico' },
            { rel: 'manifest', href: '/manifest.json' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Rubik:wght@400;700&display=swap',
            },
        ],
    },
    css: ['~/assets/main.css'],
    buildModules: ['@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            'Caveat+Brush': true,
            Rubik: [400, 700],
        },
        display: 'swap',
        prefetch: true,
        preconnect: true,
        preload: true,
    },
});

<script setup lang="ts">
const itemList = [
    [
        '[Racket](https://racket-lang.org/) (Scheme) to build a backend server',
        'Ricing my (third) [Arch](https://wiki.archlinux.org/title/Arch_Linux) distro with [Openbox](http://openbox.org/wiki/Main_Page)',
        'Shell scripting and C',
    ],
    [
        '[TAMS Club Calendar](https://tams.club) - Unofficial student organization calendar for [TAMS](https://tams.unt.edu/)',
        '[aTab](https://github.com/MichaelZhao21/atab) - Firefox extension that replaces new tab window with a nicer interface',
        '[Discord Pull Request Notifications](https://github.com/MichaelZhao21/pr-discord-notif) - Get notifications for pull requests through a Discord bot!',
        '[Stickerinator](https://github.com/MichaelZhao21/stickerinator) - Crop out white backgrounds easily with this Python script',
        '[Brainfuck Interpreter](https://github.com/MichaelZhao21/bf-interpreter) - Simple [brainfuck](https://esolangs.org/wiki/Brainfuck) interpreter written in C',
    ],
    [
        "[Occam's Razor](https://conceptually.org/concepts/occams-razor)",
        '[Principle of Least Astonishment](https://en.wikipedia.org/wiki/Principle_of_least_astonishment)',
        '[the cube rule](https://cuberule.com/)',
    ],
    [
        '[Clock](https://clock.michaelzhao.xyz) - simple clock display I made that will ding every hour',
    ],
];
</script>

<template>
    <div id="app">
        <RainbowTitle text="~ Michael Zhao ~" />
        <div id="about-container">
            <div class="about-side" id="about-left">
                <img src="https://cdn.michaelzhao.xyz/images/kazuha-chibi.webp" alt="Cute image!" />
            </div>
            <div class="about-side" id="about-right">
                <p class="about">
                    Hi! I'm an undergraduate computer science student studying at the University of
                    Texas at Dallas. I enjoy coding for fun whenever I get the chance, mostly
                    working on frontend UI/UX design projects, as well as full-stack applications
                    and services.
                </p>
                <p class="about">
                    In my free time, I love drawing and creating art. I've done quite a bit of
                    traditional sketching and some painting, but I'm trying to get into digital art
                    this year. I also cook whenever I get the opportunity to! Feel free to shoot me
                    an email or message, and I'll be happy to talk to you :DD
                </p>
            </div>
        </div>
        <div id="link-grid">
            <ColorButtonLink text="Email" href="mailto:michaelzhao314@gmail.com" color="#FB8BC1" />
            <ColorButtonLink
                text="Github"
                href="https://github.com/MichaelZhao21"
                color="#FFBE5E"
            />
            <ColorButtonLink
                text="LinkedIn"
                href="https://www.linkedin.com/in/michaelzhao21/"
                color="#92FAA2"
            />
            <ColorButtonLink
                text="Resume"
                href="https://cdn.michaelzhao.xyz/resume.pdf"
                color="#92BDFF"
            />
        </div>

        <div class="spacer"></div>
        <div id="list-list">
            <ItemListSection
                title="what i'm studying"
                :list="itemList[0]"
                icon="light-bulb"
                alt="light bulb icon"
            />
            <ItemListSection
                title="projects"
                :list="itemList[1]"
                icon="closed-book"
                alt="closed book icon"
            />
            <ItemListSection
                title="interesting links"
                :list="itemList[2]"
                icon="sun-behind-cloud"
                alt="sun behind cloud icon"
            />
            <ItemListSection
                title="fun stuff"
                :list="itemList[3]"
                icon="snowflake"
                alt="snowflake icon"
            />
        </div>
    </div>
</template>

<style>
#app {
    min-height: 100%;
    max-width: 50rem;
    margin: auto;
    padding: 1rem 1rem 2rem;
}

/* ################## About section ################## */

#about-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem 0;
}

#about-left {
    flex-basis: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#about-right {
    flex-basis: 60%;
}

.about-side {
    flex-shrink: 0;
    flex-grow: 0;
}

/* ################## Link grid ################## */

#link-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    margin: 0 4rem;
    padding-top: 1rem;
}

/* ################## Phone ################## */

@media only screen and (max-width: 768px) {
    #about-container {
        padding: 0;
        flex-direction: column;
    }
    
    #about-left {
        padding-bottom: 0.5rem;
    }

    #link-grid {
        grid-template-columns: repeat(1, 1fr);
        margin: 0;
        padding-bottom: 1rem;
    }
}
</style>

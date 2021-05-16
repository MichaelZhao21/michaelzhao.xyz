<template>
    <h2 id="footer">Footer</h2>
    <p class="center">Click and drag to draw :))</p>
    <div class="color-slider">
        <div
            class="slider-tick"
            v-for="(n, i) in 360"
            v-bind:key="i"
            v-bind:style="`background-color:hsl(${i},100%,50%)`"
            v-on:click="chooseColor"
            v-bind:id="`col-${i}`"
            v-bind:title="i"
        ></div>
    </div>
    <div class="tile-controls">
        <button
            v-bind:class="'toggle-erase ' + (erase ? 'active' : '')"
            v-on:click="erase = !erase"
        >
            Erase [Shift]
        </button>
        <button
            v-bind:class="'toggle-rainbow ' + (rainbow ? 'active' : '')"
            v-on:click="rainbow = !rainbow"
        >
            Random Colors!
        </button>

        <p class="color-label">Selected Color:</p>
        <div
            class="chosen-color"
            v-bind:style="'background-color:' + (rainbow ? '#212121' : `hsl(${color},100%,50%)`)"
        ></div>
    </div>
    <div class="footer-tiles">
        <tile
            v-bind:down="down"
            v-bind:erase="erase"
            v-bind:color="rainbow ? '' : color"
            v-for="n in 900"
            v-bind:key="n"
        ></tile>
    </div>
</template>

<script>
import Tile from './Tile';
export default {
    name: 'MyFooter',
    components: { Tile },
    data: function() {
        return {
            down: false,
            erase: false,
            color: '200',
            rainbow: false,
        };
    },
    mounted: function() {
        document.body.onmousedown = () => {
            this.down = true;
        };
        document.body.onmouseup = () => {
            this.down = false;
        };
        document.body.onkeydown = (event) => {
            if (event.key.toLowerCase() === 'shift') this.erase = !this.erase;
        };
    },
    methods: {
        chooseColor: function(event) {
            this.rainbow = false;
            this.color = event.originalTarget.id.substring(4);
        },
    },
};
</script>

<style scoped>
@import './MyFooter.css';
</style>

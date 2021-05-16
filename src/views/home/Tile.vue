<template>
    <div
        v-bind:class="'tile ' + (active ? 'active' : '')"
        v-on:mouseover="mouseCheck"
        v-on:mouseleave="over = false"
        v-on:dragstart="drag"
        v-bind:style="`--tile-color: ${this.activeColor}`"
        ref="tile"
    >
        <div class="inside"></div>
    </div>
</template>

<script>
export default {
    name: 'Tile',
    props: ['down', 'erase', 'color'],
    data: function() {
        return {
            active: false,
            over: false,
            activeColor: '0',
        };
    },
    methods: {
        mouseCheck: function() {
            this.over = true;
            if (this.down) {
                this.active = !this.erase;
                if (this.active) this.activeColor = this.getColor();
            }
        },
        drag: function(event) {
            event.preventDefault();
        },
        getColor: function() {
            let color = this.color;
            if (color === '') color = randColor();
            return color;
        }
    },
    watch: {
        down: function(newVal) {
            if (newVal && this.over) {
                this.active = !this.erase;
                if (this.active) this.activeColor = this.getColor();
            }
        },
    },
};

function randColor() {
    return Math.round(Math.random() * 360);
}
</script>

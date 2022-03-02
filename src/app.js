import $ from 'jquery';

let hsl = 191;
let hsl2 = 263;

// on body load
$(() => {
    setInterval(() => {
        hsl++;
        hsl2++;
        if (hsl > 360) hsl -= 360;
        if (hsl2 > 360) hsl2 -= 360;
        $('h1').css('--primary', `hsl(${hsl}, 100%, 61%)`);
        $('h1').css('--secondary', `hsl(${hsl2}, 100%, 61%)`);
    }, 200);
});
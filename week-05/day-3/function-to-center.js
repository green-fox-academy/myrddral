'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

let posX = 0;
let posY = 0;
for (let i = 0; i <= 29; i++) {  
    ctx.moveTo(posX, 0);
    ctx.lineTo(canvas.clientWidth/2, canvas.clientHeight/2);
    ctx.stroke();
    posX += 20;
}
for (let i = 0; i <= 19; i++) {
    ctx.moveTo(0, posY);
    ctx.lineTo(canvas.clientWidth/2, canvas.clientHeight/2);
    ctx.stroke();
    posY += 20;
}
let posA = 600;
let posB = 400;

for (let i = 0; i <= 30; i++) {  
    ctx.moveTo(posA, 400);
    ctx.lineTo(canvas.clientWidth/2, canvas.clientHeight/2);
    ctx.stroke();
    posA -= 20;
}
for (let i = 0; i <= 20; i++) {
    ctx.moveTo(600, posB);
    ctx.lineTo(canvas.clientWidth/2, canvas.clientHeight/2);
    ctx.stroke();
    posB -= 20;
}


// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáit. Ezután rajzol egy vonalat
// a megadott pont és a cavas közepe között.
// Töltsd meg a canvast vonalakkal, a szélektől indulva 20 pixelenként.
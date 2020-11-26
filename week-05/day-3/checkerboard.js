'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

let posX = 0;
let posY = 0;

// for (let i = 0; i < canvas.clientWidth; i+200) {
//     ctx.fillRect(posX, posY, 100, 100);
//     posX + 200;
// }

ctx.fillRect(posX, posY, 100, 100);
ctx.fillRect(posX + 200, posY, 100, 100);
ctx.fillRect(posX + 400, posY, 100, 100);

ctx.fillRect(300, 100, 100, 100);
ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(500, 100, 100, 100);

// Töltsd ki a canvast sakktábla mintával.
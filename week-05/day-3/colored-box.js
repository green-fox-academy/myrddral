'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

ctx.beginPath();
ctx.moveTo(350, 50);
ctx.strokeStyle = 'blue';
ctx.lineTo(350, 350);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350, 350);
ctx.strokeStyle = 'green';
ctx.lineTo(50, 350);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 350);
ctx.strokeStyle = 'red';
ctx.lineTo(50, 50);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.strokeStyle = 'pink';
ctx.lineTo(350, 50);
ctx.closePath();
ctx.stroke();


// próbáltam ciklussal megoldani, de off :D
// for (let i = 1; i <= 4; i++) {
//     let posBeginX = 50;
//     let posBeginY = 50;
//     let posEndX = 350;
//     let posEndY = 50;
//     let colors = ['green', 'blue', 'red', 'pink'];
//     ctx.beginPath();
//     ctx.moveTo(posBeginX, posBeginY);
//     ctx.strokeStyle = colors[i];
//     ctx.lineTo(posEndX, posEndY);
//     ctx.closePath();
//     ctx.stroke();
// }


// Rajzolj egy négyzetet aminek minden oldala más színű.
'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStar () {
    let posX = Math.floor(Math.random() * 600);
    let posY = Math.floor(Math.random() * 400);
    ctx.fillStyle = 'grey';
    ctx.fillRect(posX, posY, 2, 2);
}

setInterval(function(){ drawStar(); }, 100);





// Rajzold ki az éjszakai eget:
//  - A háttér legyen fekete
//  - A csillagok kis négyzetek legyenek
//  - A csillagok legynek véletlenszerüen elhelyezve a canvason
//  - A csillagok színe változzon véletlenszerűen (szürke árnyalatai)

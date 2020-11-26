'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStar () {
    let colors = [ '#f2f2f2', '#e6e6e6', '#d9d9d9', '#cccccc', '#bfbfbf', '#b3b3b3', '#a6a6a6', '#999999' ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    let posX = Math.floor(Math.random() * 600);
    let posY = Math.floor(Math.random() * 400);
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, 2, 2);
}

setInterval(function(){ drawStar(); }, 10);





// Rajzold ki az éjszakai eget:
//  - A háttér legyen fekete
//  - A csillagok kis négyzetek legyenek
//  - A csillagok legynek véletlenszerüen elhelyezve a canvason
//  - A csillagok színe változzon véletlenszerűen (szürke árnyalatai)

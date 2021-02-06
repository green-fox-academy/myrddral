'use strict';

const button = document.getElementsByTagName("button");
const countDownDiv = document.getElementsByClassName("display");

button[0].addEventListener('click', clearTimer);


// const timeoutId = setTimeout(() => {
//     countDownDiv[0].textContent = "A bomba felrobbant!";
// }, 10000);

function clearTimer() {
    clearInterval(intervalId);
    countDownDiv[0].textContent = "A bomba hatástalanítva!";
}
let counter = 10;
const intervalId = setInterval(() => {
    countDownDiv[0].textContent = `${counter}`;
    counter--;
    if (counter === 0) {
    countDownDiv[0].textContent = "A bomba felrobbant!";
    clearInterval(intervalId);
    }
}, 1000);
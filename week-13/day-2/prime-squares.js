'use strict';

for (let i = 2; i <= 100; i++) {
    const section = document.getElementsByTagName("section")[0];
    const newDiv = document.createElement("div");
    newDiv.textContent = i;
    section.appendChild(newDiv);
}

function isPrime() {

}


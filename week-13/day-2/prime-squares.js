'use strict';

for (let i = 2; i <= 100; i++) {
    const section = document.getElementsByTagName("section")[0];
    const newDiv = document.createElement("div");
    newDiv.textContent = i;
    section.appendChild(newDiv);
}

function primeValidator() {
    const div = document.querySelectorAll('div');

    div.forEach(element => {
        if (isPrime(element.textContent) === true) {
            element.classList.add('prime');
        } else {
            console.log('not-pime');
            element.classList.add('not-prime');

        }
    });

    function isPrime(num) {
        for(var i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num > 1;
    }
}

primeValidator();
'use strict';
// Készíts egy függvényt, ami dekódolja a duplicated-chars.txt tartalmát

const fs = require('fs');

function decoder(fileName) {
    let fileContent = fs.readFileSync(fileName, 'utf8');
    let splittedContent = fileContent.split('');
    for (let i = 1; i < splittedContent.length; i++) {
        fileContent = splittedContent.splice(i, 1);
    }
    console.log(splittedContent.join(''));
}

decoder('./duplicated-chars.txt');
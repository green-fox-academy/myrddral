'use strict';
// Készíts egy függvény, ami dekódolja a reversed-lines.txt tartalmát

const fs = require('fs');

function textReverse(fileName) {
    let fileContent = fs.readFileSync(fileName, 'utf8');
    let splittedContent=fileContent.split('\n').reverse().join('\n').split('').reverse().join('');
    console.log(splittedContent);
}

textReverse('./reversed-lines.txt');
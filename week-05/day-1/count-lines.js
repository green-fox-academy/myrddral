// Írj egy függvényt, ami fogad egy fájlnevet stringként,
// majd visszadja a fájlban található sorok számát.
// Ha nem tudja megnyitni a fájlt adjon vissza nullát és
// ne jelezzen semmilyen hibát.
'use strict';

const fs = require('fs');


function printFileContent(fileName) {
    try {
        let fileContent = fs.readFileSync(fileName, 'utf8');
        let res=fileContent.split('\n').length;
        console.log(res);
    } catch (error) {
        console.log(0);
    }
}

printFileContent('./my-file.txt');
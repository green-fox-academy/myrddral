'use strict';
/*
console.log(5 % 7); // 5ot osztom 7el, mennyi a maradek

const myAge = 32;

if (myAge % 2 === 0) {
    console.log ('Páros szám');
} else {
    console.log ('Páratlan szám');
}
*/
const bearsDeathNote = [];
bearsDeathNote.push ('Róka');
bearsDeathNote.unshift ('Farkas');
bearsDeathNote.push ('Puma');
bearsDeathNote.push ('Nyuszika');
console.log(bearsDeathNote.splice(0, 0));
console.table(bearsDeathNote);

// for (let i = 0; i < bearsDeathNote.length; i++) {
//     console.log('index: '+i);
//     console.log('állat: ' + bearsDeathNote[i]);
// }


// 'use strict';
// // - Hozz létre egy `baseNum` nevű változót és a állítsd be az értékét `123`-ra
// // - Hozz létre egy `doubling` nevű függvény, ami megkettőzi a bemeneti paramétert és visszaad 
// // egy egész számot (integer)
// // - Írd (logold) ki a `doubling(baseNum)` eredményét a konzolra

// let baseNum = 123;

// function doubling(number) {
//     return baseNum * 2;
// }
// console.log(doubling(baseNum));

// 'use strict';
// console.log();
// // - Hozz létre egy `al` nevű változót és állítsd be az értékét `Green Fox`-ra
// // - Hozz létre egy `greet` nevű függvényt, ami köszönti a bemeneti paraméterét
// //     - A köszöntés legyen kiírás (logolás) pl.: `Szervusz, Green Fox`
// //     - Készülj fel arra az esetre is, ha a bemeneti paramétert üresen hagyják!
// // - `greet`-eld `al`-t

// let al = "Green Fox"

// const greet = (greet = 'Hi', name = 'pal') => console.log(greet, name);

// greet('Szervusz', al);

// 'use strict';
// console.log();
// // - Hozz létre egy `typo` nevű változót, legyen az értéke `Csincsill`
// // - Írj egy `appendAFunc` nevű függvényt, ami kap egy string paramétert és
// //   hozzácsatol egy 'a' karaktert a string végéhez, majd visszatér az így
// //   kapott teljes stringel
// // - Írd ki az `appendAFunc(typo)` eredményét  a konzolra

// let typo = 'Csincsill';
// function appendAFunc(string) {
//     console.log(typo + 'a');
// }
// appendAFunc(typo);

// 'use strict';
// console.log();
// // - Írj egy `sum` nevű függvényt, ami visszaadja (return) az egész számok
// //   összegét nullától a megadott paraméterig


// function sum(n) {
//     for (let i = 0; i <= n; i++) {
//         return console.log((n*(n+1))/2);
//     }
// }
// sum(10);

'use strict';
console.log();
// - Készíts egy `factorio` nevű függvényt, ami visszaadja 
//   a bemeneti paraméter faktoriálisát
// 5! = 1 * 2 * 3 * 4 * 5
function factorio(num) {
    let fact = 1;
   for(let i = 1; i <= num; i++){
    fact *= i;
    }
    return fact;
}
console.log(factorio(5));

// 'use strict';
// console.log();
// // - Hozz létre egy `printParams` függvényt, ami kiírja a konzolra
// //   a bementi paramétereit (lehet több paramétere is)

// function printParams(a, b, c) {
//     return console.log(` ${a} is a ${typeof a}, ${b} is a ${typeof b}, ${c} is a ${typeof c}`);
// }
// printParams( 10, true, 'alma');
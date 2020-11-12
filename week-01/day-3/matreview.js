// ez a first nevű változó 5
let firstVar = 5; // sor végi komment, ez után már nem lehet kód

/*
komment 1. sor
komment 2. sor
*/

let secondVar /*masodik */ = 10;

console.log('Sziasztok ez az első közös console.log-unk!');

// deklarálás
let thirdVar;

// definiálás, amikor értéket kap
let fourthVar = 1;

if (true) {
    var varInIf = true;
    let letInIf = true;
}

console.log('varInIf', varInIf); // if-en kívül is látható a változó értéke
console.log('letInIf', letInIf); // if-en kívül hibára fut


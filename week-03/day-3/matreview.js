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
    const constInIf = true;
}

console.log('varInIf', varInIf); // if-en kívül is látható a változó értéke

// console.log('letInIf', letInIf); // if-en kívül hibára fut
// console.log('constInIf', constInIf); // if-en kívül hibára fut

// primitív változók: string, boolean, number, bigint, null, undefined
// nem primitív változók: object, array, funktion
// NaN

let stringVar1 = 'szöveg'; //nem lehet több soros a változó értéke
let stringVar2 = "szöveg"; //nem lehet több soros a változó értéke
let stringVar3 = `első sor
második sor`;
let stringVar4 = `${5000/3}`;
console.log(stringVar1, stringVar2, stringVar3, stringVar4);

let numberVar1 = 5;
let numberVar2 = -10;
let numberVar3 = 7.32131;
let numberVar4 = -9.123123;

let bigintVar1 = 23423423546235235324143523n; //engedi a nagyon nagy számokat, kell az "n" a végére
console.log('bigint', bigintVar1);

let nanVar1 = NaN; //not a number, nincs szám értéke
let nanVar2 = parseInt('1231321.243234'); // egész számmá alakítja

console.log(nanVar1, nanVar2);


let boolVar1 = true;
let boolVar2 = false;

console.log('bool-ok:');
console.log(boolVar1, boolVar2);

let nullVar = null;


// null: van értéke, de szándékosan üres

let undefinedVar1;
let undefinedvar2 = undefined;

// undefined: nincs változó, v nincs értéke

// típusellenőrzés

console.log(typeof stringVar1, typeof(numberVar1), typeof bigintVar1, typeof boolVar1);
console.log (typeof null);
console.log (typeof undefined);

//      OPERATOROK        //

let sum1 = 5+10;
let sum2 = 5+10+20;
let subst = 10-5;
let multipl = 5 * 10;
let modulus = 10 % 3;
let hatvany = 10 ** 3;

console.log(sum1, sum2, subst, multipl, modulus, hatvany);

// precedencia: (), **, *, / , +, -

//      LOGIKAI MŰVELETEK     //

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//        ÖSSZEHASONLÍTÁSI OPERÁTOROK       //

console.log(' 5 == 5', 5 == 5);  // csak értéket ellenőriz
console.log('5 === "5"', 5 === "5"); // típust is ellenőriz

console.log(' 5 != 5', 5 != 5);
console.log('5 !== "5"', 5 !== "5");

//       IRANYITASI STRUKTURAK       //

if ( 5 < 10 && true === !false) {            // mivel igaz, belép az if-be
    console.log( ' beleptünk az if-be');

}if ( 5 < 10 && true !== !false) {            // mivel nem igaz, belép az else-be
    console.log( ' beleptünk az if-be');
} else {
    console.log(' beléptünk az else-be');
}

let whileVar = 0;
while ( whileVar < 5 ) {
    console.log('whileVar', whileVar);
    whileVar++;
}

for (let forVar = 0; forVar < 5; forVar++) {
console.log('forVar', forVar);
    if (forVar == 2) {      // amint elérte a forVar értéke a 2-t, kilép
        break;
    }
} 


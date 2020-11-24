'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal:
// `[1, 3, 5, 7]`
// Logold ki a `numbers` harmadik elemét a konzolra!

const numbers = [1, 3, 5, 7];
console.log(numbers[2]);

'use strict';
// Hozz létre egy `firstArrayOfNumbers` változót az alábbi tartalommal:
// `[1, 2, 3]`
// Hozz létre egy `secondArrayOfNumbers` változót az alábbi tartalommal:
// `[4, 5]`
// Logold ki a konzolra, hogy 'secondArrayOfNumbers hosszabb, mint a
// firstArrayOfNumbers' hogyha a 'secondArrayOfNumbers'-ben több elem van, mint
// a 'firstArrayOfNumbers'-ben

const firstArrayOfNumbers = [1, 2, 3];
const secondArrayOfNumbers = [4, 5, 6, 3];

if (secondArrayOfNumbers.length > firstArrayOfNumbers.length) {
    console.log('A secondArrayofNumbers hosszabb, mint a firstArrayOfNumbers.');
} else {
    console.log('A firstArrayOfNumbers hosszabb, mint a secondArrayOfNumbers.');
}

'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal:
// `[54, 23, 66, 12]`
// Logold ki a második és harmadik elem összegét a konzolra!

const numbers2 = [54, 23, 66, 12];
console.log(numbers2 [1] + numbers2 [2]);


'use strict';
// Hozz létre egy `names` változót az alábbi tartalommal:
// `["Arthur", "Boe", "Chloe"]`
// Cseréld fel a names első és harmadik elemét!
// Logold ki az eredményt a konzolra!

const names = ['Arthur', 'Boe', 'Chloe'];
let firstName = names.shift();
let lastName = names.pop();
names.push(firstName);
names.unshift(lastName);
console.log(names);


'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[4, 5, 6, 7]`
// Logold ki a konzolra a numbers tömb mindegyik elemét
// *hint: használj ciklust, a console.log(numbers) nem jó megoldás!
// Bónuszpont, hogyha ezt megcsinálod a megfelelő beépített függvénnyel is

const numbers3 = [4, 5, 6, 7];

for (let i = 0; i <  numbers3.length; i++) {
    console.log(numbers3[i]);
}
console.log();

numbers3.forEach(function(numbers3) {
  console.log(numbers3)
})

'use strict';
console.log();
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[1, 2, 3, 8, 5, 6]`
// Változtasd meg a 8-as számot 4-essé a map metódussal
// Logold ki a 4. elemet

const numbers4 = [1, 2, 3, 8, 5, 6];
numbers4.map( function replace(item) {
    if (item === 8) {
        return item / 2;
        console.log("nyuszi: " + item);
    } 
});

console.log(numbers4[3]);


'use strict';
console.log();
// Hozz létre egy `numbers` változót az alábbi tartalommal:
// `[1, 2, 3, 4, 5]`
// Növeld meg a harmadik elem értékét!
// Logold ki a harmadik elemet a konzolra!

const numbers5 = [1, 2, 3, 4, 5];
let moddedNumber = numbers5[2];
moddedNumber++;
numbers5.splice(2, 1);
numbers5.splice(2, 0, moddedNumber);
console.log(numbers5[2]);
console.log(moddedNumber);

console.log();
'use strict';
// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy "a" betűt
// Próbálj meg beépített metódust használni ciklus helyett!

let animals1 = ['koal', 'pand', 'zebr'];
let animalsPlusA = animals1.map( string => string + 'a');
animals1 = animalsPlusA;
console.log(animals1);

let animals = ['koal', 'pand', 'zebr'];
animals.forEach((elem, index) => animals[index] = elem + 'a');
console.log(animals);

'use strict';
console.log();
// Hozz létre egy `drinks` változót az alábbi tartalommal:
// `['Gin', 'Whiskey', 'Wine', 'Beer']`
// Duplázd meg a stringeket (szöveges elemeket)!
// Használj beépített metódust a ciklusok helyett!
// Logold ki az eredményt!
// A várt eredmény: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
drinks.forEach((drink, index) => drinks[index] = drink+drink);
console.log(drinks);


'use strict';
console.log();
// Hozz létre egy kétdimenziós tömböt, ami különböző színek egyes árnyalatait
// tartalmazza.
// A `colors[0]` a zöld árnyalatait tartalmazza:
// `"lime", "forest green", "olive", "pale green", "spring green"`
// A `colors[1]` a piros árnyalatait tartalmazza:
//   `"orange red", "red", "tomato"`
// A `colors[2]` a rózsaszín árnyalatait tartalmazza:
//   `"orchid", "violet", "pink", "hot pink"`


let colors = [
    ['lime', 'forest green', 'olive', 'pale green', 'spring green'],
    ['orange red', 'red', 'tomato'],
    ['orchid', 'violet', 'pink', 'hot pink']
];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

'use strict';
console.log();
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Logold ki az elemek összegét a konzolra!

let sum2 = 0;
let numbers6 = [3, 4, 5, 6, 7];
numbers6.forEach(myFunction);

function myFunction(item) {
  sum2 += item;
  console.log(sum2);
}


'use strict';
// Hozz létre dinamikusan* egy kétdimenziós tömböt!
// Tartalma az alábbi mátrix** legyen.
// Használj ciklust hozzá!

//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0

// Logold ki a mátrixot a konzolra.
//
// * a mérete egy változóból érkezzen, így téve dinamikussá a mátrix létrehozását
// ** ne ijedj meg a kifejezéstől, egy mátrix: tömbök a tömbben

'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Fordítsd meg a bejárás sorrendjét, kezdd a végéről!
// - beéptett metódussal
// - egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét



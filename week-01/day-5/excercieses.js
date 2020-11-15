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
let sum = numbers2 [1] + numbers2 [2];
console.log(sum);


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
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[1, 2, 3, 8, 5, 6]`
// Változtasd meg a 8-as számot 4-essé a map metódussal
// Logold ki a 4. elemet

const numbers4 = [1, 2, 3, 8, 5, 6];
numbers4.map(function replace());


'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal:
// `[1, 2, 3, 4, 5]`
// Növeld meg a harmadik elem értékét!
// Logold ki a harmadik elemet a konzolra!

'use strict';
// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy "a" betűt
// Próbálj meg beépített metódust használni ciklus helyett!


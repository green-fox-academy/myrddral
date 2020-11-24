// Callback függvény - azaz függvény, mint paraméter (argumentum)
// Referencia egy futtatható kódra, amit argumentumként adunk át másik kód számára.
// Az egyik függvénynek megmondjuk, hogy mit hívjon meg (callback fn) a művelet végrehajtása során.

const animals = ['medve', 'róka', 'farkas', 'nyuszika'];

// írjuk ki az állatokat
for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]); // kiírja az állatot
}
// üdvözöljük az állatokat
for(let i = 0; i < animals.length; i++) {
    console.log(`Greetings, ${ animals[i] }.`); // üdvözli az állatot
}

// DE! Érdemes mindig leírni a for ciklust, amikor szeretnénk valamit csinálni az állatokkal?
// NEM! Szervezzük függvénybe, és a forEachAnimal döntse el, hogy melyiket csinálja.

function printAnimal(animal) {
    console.log(animal); // kiírja az állatot
}

function greetAnimal(animal) {
    console.log(`Üdvözlégy, ${ animal } koma.`); // üdvözli az állatot
}

function forEachAnimal_simple(animals, printPlease = true) {
    if (printPlease) {
        // írjuk ki az állatokat
        for(let i = 0; i < animals.length; i++) {
            printAnimal(animals[i]); // meghívjuk a printAnimal-t, argumentuma az adott állat
        }
    } else {
        // üdvözöljük az állatokat
        for(let i = 0; i < animals.length; i++) {
            greetAnimal(animals[i]); // meghívjuk a greetAnimal-t, argumentuma az adott állat
        }
    }
}

// hívjuk meg, hogy lefusson
forEachAnimal_simple(animals, true);   // print
forEachAnimal_simple(animals, false);  // greet

// Dehát még így is két for ciklusunk van :( Hatékony ez így?
// NEM! Mi van, ha pluszban szeretném fordítva kiírni az állatok nevét?
// Akkor a függvénybe még egy elágazás kéne, és még egy for ciklus.
// Mi lenne, ha nem a forEachAnimal döntené el, hogy mit csináljon, hanem kívülről kapná, hogy milyen feladatot végezzen (callback fn)?

function forEachAnimal_callback(animals, doSomethingWithAnimal /* function (callback) */) {
    for(let i = 0; i < animals.length; i++) {
        doSomethingWithAnimal(animals[i]); // meghívjuk a callback függvényt
        // a forEachAnimal függvényt egyáltalán nem érdekli, hogy milyen függvényt kap
        // csak meghívja, amit kap, és átadja neki az állatot
    }
}

// FONTOS: itt a függvényt magát kell átadni, amit meg tud hívni a forEachAnimal!
// ha pl. printAnimal()-t adnánk át, akkor hibát dobna a program, mert
//    - printAnimal() = undefined (nincs return értéke, tehát undefined)
//    - forEachAnimal-ban a doSomethingWithAnimal = undefined
//    - a forEachAnimal az undefined-et próbálná meghívni, mint függvényt, de az undefined nem függvény
// forEachAnimal_callback(animals, printAnimal()); // NEM JÓ
forEachAnimal_callback(animals, printAnimal);
forEachAnimal_callback(animals, greetAnimal);

// Hurrá, már csak egyszer szerepel a for ciklus!
// És ha fordítva szeretném kiírni az állatok neveit, azt hipp-hopp meg tudom csinálni:

function reverseAnimalName(animal) {
    // lépések:
    // const animalCharArray = animal.split(''); // karakter tömböt készít
    // const animalCharArrayReversed = animalCharArray.reverse(); // megfordítja a tömb elemeinek sorrendjét
    // const animalNewString = animalCharArrayReversed.join(''); // összefűzi a tömb elemeit egy string-gé
    console.log(animal.split('').reverse().join(''));
}

forEachAnimal_callback(animals, reverseAnimalName);




// De ami a legfontosabb:

// függvény deklaráció: function fuggvenyNeve(...) { ... }
//   function NAME(PARAMETER, PARAMETER = DEFAULT_VALUE) { BODY_START
//       return RETURN_VALUE;
//   BODY_END }
function anyName(param, paramWithDefaultValue = 'default') {
    // ...műveletek

    // ez lesz az értéke a függvényhívásnak
    // ha nincs return statement, akkor a default RETURN_VALUE = undefined
    return 'value';
}

// függvény hívás: fuggvenyNeve(...) === returnValue
//   RETURN_VALUE === NAME(ARGUMENT, ARGUMENT);
const returnValueOfAnyNameFn = anyName('input1', 'input2');
// anyName('input1', 'input2') => 'value' (RETURN_VALUE)
// returnValueOfAnyNameFn === anyName('input1', 'input2') === 'value'

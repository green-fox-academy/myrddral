const animals = ['medve', 'róka', 'farkas', 'nyuszika'];

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
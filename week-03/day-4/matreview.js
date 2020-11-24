'use strict'; // nem enged nem deklarált változót használni

let personAge = 18

if (personAge >= 21 ) {
    console.log('Vehet sört');
}
else if ( personAge >= 18) {
    console.log (' Vehet, de csak szülői felügyelettel');
}
else {
    console.log('Nem vehet sört');
}

// personAge = 10;
// while (personAge < 18) {
//     console.log(`Az életkora ${personAge}, ezért nem vehet sört`);
//     personAge++;
// }

for (let i = 0, personAge = 10; personAge < 18; personAge++) {
    console.log(`Az életkora ${personAge}, ezért nem vehet sört`);
}

const cars = ['Opel', 'Seat', 'BMW', 'Bentley', 'Bugatti', 'Mitsubishi', 'Toyota', 'Mazda'];

for ( let i = 0; i <=8; i++) {
    // egyesével végiglépked az autókon
    for (let j = i; j <8; j++) {
        if ( cars[j] < cars[i]) {

        }
    }
}
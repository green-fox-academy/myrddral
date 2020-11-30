// Állat
// Készíts egy Animal osztályt
// Minden állatnak van egy hunger (éhség) értéke, ami egy egész szám
// Minden állatnak van egy thirst (szomjúság) értéke, ami egy egész szám
// Amikor létrehozol egy új állat példányt, ezeknek az értékei alapból legyenek 50
// Minden állat tud enni (eat()), ami csökkenti az éhségét eggyel
// Minden állat tud inni (drink()), ami csökkenti a szomjúságát eggyel
// Minden állat tud játszani (play()), ami mindkét értéket növeli eggyel
'use strict';

class animal {
    constructor(hunger = 50, thirst = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }
    eat() {
        this.hunger -= 1;
    };
    drink() {
        this.thirst -= 1;
    };
    play() {
        this.hunger += 1;
        this.thirst += 1;
    }
}

const animals = new animal();

console.log(animals);
animals.play();
console.log(animals);

// Filctoll
// Készíts egy Sharpie osztályt
// Tudnunk kell mindegyik filctoll színét color (ez legyen string típusú), szélességét width (legyen egy lebegőpontos szám), a tinta mennyiségét inkAmount (szintén egy lebegőpontos szám)
// Példányosításkor a color és a width legyenek kötelezően megadandóak
// Minden példányosított filctoll inkAmount értéke legyen alapból 100
// Legyen az objektumoknak egy use() (használ) metódusa, ami csökkenti az inkAmount értékét
'use strict';

class sharpie {
    constructor(color, width, inkAmount = 100) {
        this.color = color.toString();
        this.width = parseFloat(width);
        this.inkAmount = parseFloat(inkAmount);
    }

    use() {
        this.inkAmount -= 1;
    }

    isEmpty() {
        return this.color === '' || this.width === '';
    }
}

const sharpies = [
    new sharpie('blue', 0.5),
    new sharpie('purple', 0.3),
    new sharpie('red', 0.5),
]

if (sharpies[0].isEmpty()) {
    console.log('A színt kötelező megadni!');

}


class SharpieSet {
    constructor()
}

// console.log(sharpies);
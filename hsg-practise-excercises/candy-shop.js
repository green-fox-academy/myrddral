'use strict';

class Candy {
    price;
    sugar;

    constructor(price, sugar) {
        this.price = price;
        this.sugar = sugar;
    }

    getSugar() {
        return this.sugar;
    }
    getPrice() {
        return this.price;
    }
    // setPrice(price) {
    //     this.price = price;
    // }
    increasePrice(price) {
        this.price += price;
    }

}

class Lollipop extends Candy {
    constructor() {
        super(price, sugar);
    }
}

class HardCandy extends Candy {
    constructor() {
        super(price, sugar)
    }
}

class CandyShop {
    sugar = 0;
    income = 0;
    inventory =  [];

    constructor(amountOfSugar) {
        this.sugar = amountOfSugar;
    }

    createCandy(candy) {
        const sugarNeeded = candy.getSugar();
        if ( this.sugar < sugarNeeded) {
            throw new Error('Nincs elég cukor');
        }
        this.inventory.push(candy);
        this.sugar -= sugarNeeded;
    }

    raisePrice(amount) { 
        this.inventory.forEach(candy => {
            candy.increasePrice(amount)
        });
    }
}

const sugarShop = new CandyShop(100);
const chupaChupsLollipop = new Lollipop();
const poppingLollipop = new Lollipop();

try {
    sugarShop.createCandy(chupaChupsLollipop);
    sugarShop.createCandy(poppingLollipop);
} catch (error) {
    console.error(error.message);
}
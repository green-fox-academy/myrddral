// Benzinkút
// Készíts egy Station és egy Car osztályt
// Station
// gasAmount -> az állomáson elérhető üzemanyag mennyisége
// refill(car) -> csökkenti az állomás gasAmount értékét és növeli az autó gasAmount értékét, az autó kapacitásától függően
// Car
// gasAmount -> az autóban lévő üzemanyag mennyisége
// capacity -> az autó üzemanyag tankjának mérete
// készíts konstruktort a Car osztályhoz, amely:
// kezdőértéket ad: gasAmount -> 0
// kezdőértéket ad: capacity -> 100

'use strict';

const { stat } = require("fs");

class Station {
    constructor(gasAmount = 180) {
        this.gasAmount = gasAmount;
    }

    refill(car) {
        this.gasAmount -= car.capacity;
        car.gasAmount += car.capacity;
    }
}

class Car {
    constructor(gasAmount = 0, capacity = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

let car = new Car();
let station = new Station();


console.log(car.gasAmount);
console.log(station.gasAmount);
station.refill(car);
console.log('Car refilled!');
console.log(car.gasAmount);
console.log(station.gasAmount);
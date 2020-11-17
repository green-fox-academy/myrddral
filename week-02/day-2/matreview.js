'use strict';

function sayHello(dayTime, hour = '10', name = 'World' ) {
    /* ezek a változók létrejönnek a fv scope-ján belül) */ 
    return 'Hello ' + name + ' on the ' + dayTime + 'at ' + hour;
}
console.log( SayHello(morning, 'SEO'));


// miért ad SayHello undefined-ot? 

function add3And2() {
    return 3 + 2;
}

function add(a, b) {
    return a + b;
}

console.log( add3And2, add(3, 2)); // miért adja ezt? > [Function: add3And2] 5

// logikai egység, lokalis névtér

let bankAccountAmount = 100000;
let personCashAmount = 0;

// init ATM transaction

function withdrawMoney(withdrawAmount = 0) {
    bankAccountAmount -= withdrawAmount;
    personCashAmount += withdrawAmount;
}

withdrawMoney();
console.log (bankAccountAmount, personCashAmount);
console.log();

// single responsibility

function calcInterest(amount, interestRate, years) {
    if (typeof amount === 'undefined' || typeof interestRate === 'undefined' || typeof years === 'undefined') {
        return 0;
    }
    // 1. kamarszamitas
    const interestAmount = amount * (1+ interestRate) ** years - amount;
    // 2. kiirja
    // console.log ( interestAmount );
    return interestAmount;
}

console.log(calcInterest (100000, 0.05, 5));

// IIFE - azonnal meghívódó függvény

( function printCurrentDay(day) {
    console.log(day);
} )('Tuesday')

// callback
function forEachCallback(arrayElement, elementIndex, originalArray) {
    // történés
    originalArray.pusz (1);
    return true;
}
const arr = [];
arr.forEach( forEachCallback );

// array for Each
function forEach( arr, callbackFn) {
    for( let i = 0; i < arr.length; i++) {
        callbackFn(arr[i], i, arr);
    }
}

function cbFn(elem) {
    console.log(elem * 2);
}
forEach(arr, cbFn);
arr.forEach(cbFn);
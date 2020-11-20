'use strict';

function sayHello(dayTime, hour = '10', name = 'World' ) {
    /* ezek a változók létrejönnek a fv scope-ján belül) */ 
    return 'Hello ' + name + ' in the ' + dayTime + ' at ' + hour;
}
console.log(sayHello('morning', 5)); // miért ad SayHello undefined-ot? 

console.log();

function add3And2() {
    return 3 + 2;
}

function add(a, b) {
    return a + b;
}


console.log( add3And2(), add(3, 2)); // miért adja ezt? > [Function: add3And2] 5


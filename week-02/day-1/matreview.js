'use strict';

// FOR A FOR-BAN 

const matrix = [
[25, 30, 25],
[60, 30, 75],
[12, 21, 53]
];

// for (let i=0; i < matrix.length; i++) {
//     let row = matrix[i];
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

const doubleMatrix = [];

for (let i = 0; i < matrix.length; i++) {
    doubleMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
        doubleMatrix[i][j] = 2 * matrix[i][j];

    }
}
console.log(doubleMatrix);

console.log();

const matrixEvenDouble = [];

// páratlan sorok páratlan helyén lévő számokat duplázzuk
// és a páros sorok páros helyén lévő számokat duplázzuk
// a többi érték marad az eredeti

for (let i = 0; i < matrix.length; i++) {
    doubleMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
        let humanRowNumber = i + 1;
        let isHumanCellNumber = j + 1;
        let isHumanRowNumberOdd = humanRowNumber % 2 === 1;
        let isHumanCellNumberOdd = isHumanCellNumber % 2 === 1;
        if (isHumanRowNumberOdd && isHumanCellNumberOdd) {
            matrixEvenDouble[i][j] = 2 * matrix[i][j];
            } else {
                matrixEvenDouble[i][j] = matrix[i][j];
            }
        }
    }

sayHeisenbergName();

function sayHeisenbergName() {
    console.log('Heisenberg');
}

sayMyName('Attila');  //nem az én nevem írja ki, hanem "myName"

function sayMyName(myName) {
    console.log('myName');
}

// finction.double kimaradt

// anonymous function

// const triple = function (number) {
//     return number * 3;
// };

const ourSalary = [
    300_000, 290_000, 120_000
];


let newSalary = ourSalary.map(function (number) {
    return number * 3;
});

function triple (number) {
    return number * 3;
}
 
console.log(newSalary);
let numbers4 = [1, 2, 3, 8, 5, 6];
// numbers4 = numbers4.map( function replace(item) {
//     if (item === 8) {
//         return item / 2;
//     }
//     return item;
// });
// console.log(numbers4);

// console.log(numbers4[3]);

// let numbers = [1, 2, 3, 4, 5];
// let doubles = numbers.map(number => number * 2)
// console.log(doubles)

numbers4 = numbers4.map(item => {
    if (item === 8) {
        return item / 2
    }
    return item;
});
console.log(numbers4);
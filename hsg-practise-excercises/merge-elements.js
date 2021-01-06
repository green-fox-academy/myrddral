'use strict';

function mergeElements (array1, array2) {
    let array3 = array1.concat(array2);
    console.log(array3);
}

mergeElements(["apple", "pear", "banana", "orange"], ["dog", "cat"]);
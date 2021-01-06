'use strict';

function countWordsEndsWithS(string) {
    let words = string.split(' ');
    let counter = 0;
    words.forEach(element => {
       if (element.includes('s')) {
        counter++;
       };
    });
console.log(counter);
};

countWordsEndsWithS("ends with s characters");
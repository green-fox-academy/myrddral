"use strict";

let matrix = [
  [1, 3, 6, 2],
  [4, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 2],
];

function multiplyMatrixItems(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] % 2 === 0) {
            matrix[i][j] = matrix[i][j] * 2;
        }
      }
    }
  }
  console.log(matrix);
}

multiplyMatrixItems(matrix);

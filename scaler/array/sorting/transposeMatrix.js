function transposeMatrix(arr) {
  const row = arr.length, col = arr[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = i + 1; j < col; j++) {
      if (j < row) {
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }
  }
  return arr;
}

console.log('transposeMatrix', transposeMatrix([[21, 62, 16, 44, 55, 100, 16, 86, 29], [62, 72, 85, 35, 14, 1, 89, 15, 73], [42, 44, 30, 56, 25, 52, 61, 23, 54], [5, 35, 12, 35, 55, 74, 50, 50, 80], [2, 65, 65, 82, 26, 36, 66, 60, 1], [18, 1, 16, 91, 42, 11, 72, 97, 35], [23, 57, 9, 28, 13, 44, 40, 47, 98]]));
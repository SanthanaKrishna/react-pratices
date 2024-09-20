function transposeSquareMatrix(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr;
}


console.log('transposeSquareMatrix', transposeSquareMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
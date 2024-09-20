// function antiDiagonal(arr) {
//   let colLn = arr[0].length, n = arr.length;
//   let ans = [], k = 0;
//   //diagonal starting with 0th row
//   for (let col = 0; col < n; col++) {
//     let i = 0, j = col, l = 0;
//     let a = [];
//     while (i < n && j >= 0) {
//       a[l] = arr[i][j];
//       l++;
//       i++
//       j--;
//     }
//     ans[k] = a;
//     k++;
//   }

//   for (let row = 0; row < n; row++) {
//     let i = row, j = n - 1, l = 0;
//     let a = [];
//     while (i < n && j >= 0) {
//       a[l] = arr[i][j];
//       l++;
//       i++
//       j--;
//     }
//     ans[k] = a;
//     k++;
//   }

// }

function antiDiagonal(arr) {
  let n = arr.length;
  let rowLen = n, colLen = arr[0].length;
  let result = [], index = 0;
  for (let col = 0; col < n; col++) {
    let startRow = 0, startCol = col, k = 0;
    let colDiag = [];
    while (startCol >= 0 && startRow < n) {
      colDiag[k] = arr[startRow][startCol];
      startCol--;
      startRow++;
      k++;
    }
    result[index] = colDiag;
    index++;
  }

  for (let row = 1; row < n; row++) {
    let startRow = row, startCol = n - 1, k = 0;
    let rowDia = [];
    while (startCol >= 0 && startRow < n) {
      rowDia[k] = arr[startRow][startCol];
      startCol--;
      startRow++;
      k++
    }
    result[index] = rowDia;
    index++;
  }
  return result;
}


// function antiDiagonal(arr) {
//   //M = col, N= row;
//   let M = arr[0].length;
//   //iterate over diagonal of row 0
//   let i = 0, j = 0;
//   while (j < M) {

//   }

//   //iterate over diagonal of col M-1
//   let i = 1; j = M - 1;
//   while (i<N) {

//   }

// }

console.log('antiDiagonal', antiDiagonal([[1, 2, 3], [4, 5, 6,], [7, 8, 9]]));

// console.log('antiDiagonal', antiDiagonal([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]));

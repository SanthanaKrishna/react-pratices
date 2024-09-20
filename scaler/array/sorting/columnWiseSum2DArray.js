function columnWiseSum2DArray(arr) {
  let col = arr.length, row = arr[0].length, sum = 0, sumArr = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const value = arr[j][i]
      sum = sum + value;
    }
    sumArr.push(sum);
    sum = 0;
  }

  console.log('sum', sumArr);
}

const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 2, 3, 4]];
console.log('column', columnWiseSum2DArray(arr));
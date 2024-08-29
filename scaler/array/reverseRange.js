function reverseRangeArray(arr, a, b) {
  let i = a, j = Math.floor(b / 2);
  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[b];
    arr[b] = temp;
    b--;
    i++;
  }
  console.log('reverse array', arr);
}


reverseRangeArray([1, 2, 3, 4, 5, 6], 1, 2)
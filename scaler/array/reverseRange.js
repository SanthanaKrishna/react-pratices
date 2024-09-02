function reverseRangeArray(arr, a, b) {
  let i = a, j = b;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
    i++;
  }
  console.log('reverse array', arr);
}


reverseRangeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2, 8)
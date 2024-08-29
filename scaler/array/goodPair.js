function goodPair(arr, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === b) {
      return 1;
    }
  }
  return 0;
}

console.log('good pair', goodPair([1, 2], 3));
function goodPair(arr, b) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j]
      if (sum === b) {
        return 1;
      }
    }
  }
  return 0;
}

console.log('good pair', goodPair([1, 2, 3, 4], 7));

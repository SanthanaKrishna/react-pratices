function sortingAlgorithm(arr, b) {
  let n = arr.length, min=0;
  for (let i = 0; i < n - 1; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  
  console.log('asc', arr);
  return arr[b - 1];
}


console.log('sortingAlgorithm', sortingAlgorithm([2, 1, 4, 3, 2], 3))
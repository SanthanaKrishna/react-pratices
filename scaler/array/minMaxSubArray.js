function minMaxSubArray(arr) {
  let min = arr[0], max = arr[0], n = arr.length;
  for (let i = 1; i < n; i++) {
    if (min > arr[i]) {
      min = arr[i]
    } else if (max < arr[i]) {
      max = arr[i]
    }
  }
  console.log('minMax', min, max)
}


console.log(minMaxSubArray([2, 6, 1, 6, 9]));
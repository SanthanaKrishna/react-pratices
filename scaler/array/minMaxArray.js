function minMaxArray(arr) {
  let min = arr[0], max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  console.log('min', min);
  console.log('max', max);
}
const result = minMaxArray([10, 4, -1, -20, 3, 5])
console.log(result);
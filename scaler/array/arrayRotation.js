function arrayReverse(arr, n, start, end) {
  let i = start, j = end;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
function arrayRotation(arr, k) {
  let n = arr.length;
  k = k % n;
  console.log('k', k);
  arr = arrayReverse(arr, n, 0, n - 1);
  arr = arrayReverse(arr, n, 0, k - 1);
  arr = arrayReverse(arr, n, k, n - 1);

  console.log('result ', arr);
}

const arr = [1, 2, 3, 4, 5, 6, 7]
//[10, 11, 12, 1, 2, 3...9]
arrayRotation(arr, 3)

// arr = arrayReverse(arr, Math.floor(n / 2), 0, n - 1);
// const arr1 = arrayReverse(arr, Math.floor(k / 2), 0, k - 1);
// console.log('senf', arr1)
// arr = arrayReverse(arr1, Math.floor(((n - k) / 2)) + k, k, n - 1);

// [1, 2, 3, 4, 5, 6, 7]  -- input
// [7, 1, 2, 3, 4, 5, 6]
// [6, 7, 1, 2, 3, 4, 5]
// [5, 6, 7, 1, 2, 3, 4] -- k- range reverse output

//[7, 6, 5, 4, 3, 2, 1] --> reverse input array
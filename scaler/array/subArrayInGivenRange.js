function subArrayInGivenRange(arr, start, end) {
  let result = [];
  let index = 0;
  for (let i = start; i <= end; i++) {
    result[index] = arr[i];
    index++;
  }
  return result;
}

console.log('subArrayInGivenRange', subArrayInGivenRange([4, 2, 2], 0, 1))
function generateAllSubArray(arr) {
  let n = arr.length;
  let totalSubArray = n * (n + 1) / 2;
  let result = new Array(totalSubArray);
  let index = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subArraySize = j - i + 1;
      result[index] = new Array(subArraySize);
      for (let k = 0; k < subArraySize; k++) {
        result[index][k] = arr[i + k];
      }
      index++;
    }
  }

  return result;
}

console.log('generateAllSubArray', generateAllSubArray([1, 2, 3]));
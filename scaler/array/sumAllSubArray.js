function sumAllSubArray(arr) {
  let n = arr.length;
  let start, end, subArrays, contribution, total = 0;
  for (let i = 0; i < n; i++) {
    start = i + 1;
    end = n - i;
    subArrays = start * end;
    contribution = subArrays * arr[i];
    total = total + contribution;
  }
  return total;
}

console.log('sumAllSubArray', sumAllSubArray([2, 1, 3]));
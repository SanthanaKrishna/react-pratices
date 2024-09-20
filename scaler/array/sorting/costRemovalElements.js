function costRemovalElements(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let n = arr.length, cost = 0;
  for (let i = 0; i < n; i++) {
    cost = cost + (arr[i] * (n - i));
  }
  return cost;
}


console.log('cost of removalElements', costRemovalElements([2, 1, 4]))
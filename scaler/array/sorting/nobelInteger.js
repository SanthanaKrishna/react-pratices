
function nobelIntegerGreater(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length, ans = 0;
  for (let i = 0; i < n; i++) {
    // let j=0
    if (arr[i] === i) {
      if (i === n - 1) {
        return -1
      }
    }
  }
  return -1;
}

console.log('nobelInteger', nobelIntegerGreater([3, 2, 1, 3]));
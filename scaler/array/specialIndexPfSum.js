function specialIndex(arr) {
  let pfEven = [], pfOdd = [], n = arr.length,
    sumEven = 0, sumOdd = 0, result = 0;
  pfEven[0] = arr[0];
  pfOdd[0] = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      pfEven[i] = pfEven[i - 1] + arr[i];
      pfOdd[i] = pfOdd[i - 1];
    } else {
      pfEven[i] = pfEven[i - 1];
      pfOdd[i] = pfOdd[i - 1] + arr[i];
    }
  }
  console.log('pf even', pfEven)
  console.log('pf odd', pfOdd)

  for (let j = 0; j < n; j++) {
    if (j === 0) {
      sumEven = pfOdd[n - 1] - pfOdd[j]
      sumOdd = pfEven[n - 1] - pfEven[j]
    } else {
      sumEven = pfEven[j - 1] + (pfOdd[n - 1] - pfOdd[j]);
      sumOdd = pfOdd[j - 1] + (pfEven[n - 1] - pfEven[j])
    }
    sumEven === sumOdd && result++;
    console.log('sumEven and sumOdd', j, '-->', sumEven, sumOdd);
  }
  return result;
}

console.log(specialIndex([1, 1, 1]));

// [2, 1, 6, 4]
// [1, 6, 4] --> se=5, so=6
// [2, 6, 4] --> se=6, so=6
// [2, 1, 4] --> se=6, so=1
// [2, 1, 6] --> se= 8, so=1
// result 1

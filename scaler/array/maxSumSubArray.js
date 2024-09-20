function maxSumSubArray(a, b, arr) {
  let maxSum = 0, currentSum = 0, j = 0;
  for (let i = 0; i < a; i++) {
    currentSum += arr[i];
    while (currentSum > b) {
      currentSum -= arr[j];
      j++;
    }

    if (currentSum <= b && currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}




console.log('maxSumSubArray', maxSumSubArray(9, 78, [7, 1, 8, 5, 8, 5, 3, 3, 5]))

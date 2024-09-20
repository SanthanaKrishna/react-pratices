function sumSubArrayLength(arr, B, C) {
  let n = arr.length, k=B;
  if (k > n) return 0;

  let currentSum = 0;
  for (let i = 0; i < k; i++){
    currentSum += arr[i];
  }

  if (currentSum === C) {
    return 1;
  }

  for (let i = k; i < n; i++) {
    currentSum += arr[i];
    currentSum -= arr[i - k];

    if (currentSum === C) {
      return 1;
    }
  }

  return 0;  
}


console.log('sumSubArrayLength', sumSubArrayLength([4,3,2,6,1], 3, 11));
function waterTrapping(arr) {
  let n = arr.length;
  if (n < 3) return 0;
  let sum = 0, left = 0, right = n - 1, leftMax = arr[0], rightMax = arr[n - 1];
  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] >= leftMax) {
        leftMax = arr[left];
      } else {
        sum += leftMax - arr[left];  // Add trapped water
      }
      left++;
    } else {
      if (arr[right] >= rightMax) {
        rightMax = arr[right];
      } else {
        sum += rightMax - arr[right];  // Add trapped water
      }
      right--;
    }
  }
  return sum;
}

console.log('waterTrapping', waterTrapping([2, 1, 3, 2, 1, 2, 4, 3, 2, 1, 3, 1]));
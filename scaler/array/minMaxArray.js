function minMaxArray(arr, minMaxLen) {
  let min = arr[0], max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return {
    min,
    max
  }
}
const arr = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1];
const result = minMaxArray(arr);
console.log(result);

function solve(arr, result) {
  const n = arr.length;
  let maxVal = result.max;
  let minVal = result.min;
  let minIndex = -1;
  let maxIndex = -1;
  let smallestSubarray = n;

  if (maxVal === minVal) {
    return 1;
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] === maxVal) {
      maxIndex = i;
      if (minIndex !== -1) {
        let currenSubArraySize = maxIndex - minIndex + 1;
        if (currenSubArraySize < smallestSubarray) {
          smallestSubarray = currenSubArraySize;
        }
      }
    }

    if (arr[i] === minVal) {
      minIndex = i;  // Update the position of the last min value seen
      if (maxIndex !== -1) {
        let currentSubarraySize = minIndex - maxIndex + 1;
        if (currentSubarraySize < smallestSubarray) {
          smallestSubarray = currentSubarraySize;
        }
      }
    }
  }

  return smallestSubarray;
}

console.log('endResult', solve(arr, result));  // Output: 3


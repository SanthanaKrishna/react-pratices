function countElement(arr) {
  let count = 1, max = arr[i];
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    // if (max > arr[i]) {
    //   max= arr[i]
    // }
    return arr.length - count;
  }
}


console.log(countElement([3, 5, 3, 2, 9, 3, 10, 10, 10, 3]))
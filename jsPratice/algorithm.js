// Sum of n numbers
function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log('summation(5)', summation(5));
// short form of program 
const summation1 = (n) => (n * (n + 1)) / 2;  //5*5+1  --> 30/2 = output 15
console.log('summation(5)1', summation1(5));

//----------Fibonacci sequence(7)= 0,1,1,2,3,5,8,13-----------------//

// let n1 = 0, n2 = 1, result = [];
// for (let i = 1; i <= 5; i++) {
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]  //2=fib[1]+fib[0] // 3=fib[2]+fib[1]
  }
  return fib
}
console.log('fibonacci(n) ', fibonacci(7)) //[0, 1, 1, 2, 3, 5, 8]

function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)   // 6-1 5 + 6-2 4  =   9
};

console.log('recursiveFibonacci(6)', recursiveFibonacci(6))

//----------Factorial number Factorial(5) = 5*4*3*2*1 = 120  ----------//
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result
}

console.log('factorial(5)', factorial(1)) // 120
//Big-O = O(N)

//----------Prime number ----------//
function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true;
}
console.log('isPrime(5)', isPrime(5)) //true
//Big-O = O(N)

function isPrime1(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    console.log('i:', i, Math.sqrt(n))
    if (n % i === 0) {
      return false
    }
  }
  return true;
}
console.log('isPrime1(5)', isPrime1(47), Math.sqrt(47)) //true
//Big-O = O(sqrt(n))

//----------Power of Two ----------//
function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true;
}
console.log('isPowerOfTwo(2)', isPowerOfTwo(2))


//------------- linear search-----------//
var arr = [-5, 2, 10, 4, 6]
arr.indexOf(10); // 2


function linearSearch(arr, target) {
  for (let i in arr) {
    if (arr[i] === target) return i
  }
  return -1
}
console.log(linearSearch([1, 2, 3, 4], 1)) // 0

//-------------  Binary Search  -----------------//
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
      return middleIndex
    }
    if (target < arr[middleIndex]) {
      //search left side
      rightIndex = middleIndex - 1
    } else {
      // target > arr[middleIndex] 
      // search right side
      leftIndex = middleIndex + 1
    }
  }
  return -1;
}

console.log('binary search', binarySearch([-5, 2, 4, 5, 6, 8, 10, 12], 10)) //6
// Big-O = O(logn)

//----------------Bubble Sort -----------//
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log('bubbleSort', bubbleSort([5, 3, 15, 10, -2, -4, -8])) // [-8, -4, -2, 3, 5, 10, 15] //Big-0 =O(n^2)

//------- Insertion sort ---------/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = numberToInsert
  }
  return arr;
}

console.log('insertionSort', insertionSort([5, 3, 15, 10, -2, -4, -8]))
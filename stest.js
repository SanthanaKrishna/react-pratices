process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  console.log('end', main(inputString))
});

function main(arr) {
  let arrValue = arr[1].split(' '), result = [];
  result[arr[0] - 1] = arrValue.shift();
  console.log('result', result);
  arrValue.forEach((el, index) => {
    result[index] = el
  })
  
  return result.join(' ') + ' ';
}


/////////////////////
function main(inputValue) {
  console.log('inputValue', inputValue)
  let input = Number(inputValue[0])
  console.log('input', input);

  let result = '';
  for (let i = input; i >= 0; i--) {
    //   console.log(i)
    if (i % 2 == 0) {
      console.log('if', i)
      if (result) {
        result = result + ' ' + i;
      }
      result = i;
    }
  }
  return result;
}
//------------------------------------//-------------------------
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  console.log('end', main(inputString))
});

function main(arr) {
  console.log(arr)
  let A = arr[0], B = arr[1], result = '';
  let n = A;
  while (n <= B) {
    if (result) {
      result = result + ' ' + n;
    } else {
      result = A;
    }
    n++;
  }
  return result + ' ';
}
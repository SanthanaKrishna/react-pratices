function findPrefixSum(pfArr, query) {
  let result = [], q = query.length, sum = 0;
  for (let i = 0; i < q; i++) {
    const L = query[i][0], R = query[i][1];
    if (L === 0) {
      sum = pfArr[R];
    } else {
      sum = pfArr[R] - pfArr[L - 1];
    }
    result[i] = sum;
  }
  console.log('sum', sum, result);
}


function rangeSumQuery(arr, query) {
  let pfArr = [], n = arr.length;
  pfArr[0] = arr[0]
  for (let i = 1; i < n; i++) {
    pfArr[i] = pfArr[i - 1] + arr[i]
  }
  console.log('pf', pfArr);
  findPrefixSum(pfArr, query);
}


// rangeSumQuery([1, 2, 3, 4, 5], [[0, 3], [1, 2]])
rangeSumQuery([2, 2, 2], [[0, 0], [1, 2]])

//Arr - [1, 2, 3, 4, 5]
// PF - [1, 3, 6, 10, 15]
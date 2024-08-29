function longestPalSubstr(str) {
  let n = str.length;

  let table = new Array(n);
  for (let i = 0; i < n; i++) {
    table[i] = new Array(n);
  }
  console.log('table create', table);

  let maxLength = 1;
  for (let i = 0; i < n; ++i) {
    table[i][i] = true;
  }
  console.log('table set', table);

  let start = 0;
  for (let i = 0; i < n - 1; ++i) {
    if (str[i] == str[i + 1]) {
      table[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }
  console.log('table true', table)

  for (let k = 3; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++){
      let j = i + k - 1;
      if (table[i + j][j - i] && str[i] == str[j]) {
        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  // Return length of LPS
  return maxLength;
}

// Driver code
let str = "forgeeksskeegfor";
console.log("Length is: " + longestPalSubstr(str));

// This code is contributed by avanitrachhadiya2155

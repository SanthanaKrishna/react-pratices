function specialSubSequences(str) {
  let countA = 0, ans = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      countA++;
    } else if (str[i] === 'G') {
      ans = ans + countA;
    }
  }
  return ans;
}



const str = 'GGGTGANAGGJGAG';
console.log(specialSubSequences(str));
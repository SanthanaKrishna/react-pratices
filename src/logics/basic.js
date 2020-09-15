/**
 * alpjabets from A to Z (65, 90) & a to z (97, 122)
 * @param {65 or 97} x 
 * @param {90 or 122} y 
 */
const printAlphabets = (x, y) => {
    var alphabets = '';
    for (i = x; i <= y; i++) {
        alphabets = alphabets.concat(String.fromCharCode(i));
    }
    return alphabets;
};

/**
 * sum of all digits of number
 * @param {675} num //output 18
 */
const addition = (num) => {
    let sum = 0;
    while (num > 0) {
        let x = num % 10;
        sum = sum + x;
        num = Math.floor(num / 10);
    }
    return sum;
}

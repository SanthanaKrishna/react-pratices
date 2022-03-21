//string + number addtion
const strNumAdd = () => {
    const a = 5;
    const b = '6';
    console.log(a + b); // 56
    console.log(a + +b); // 11
    console.log(+ b); // 6 (convert string to number)
}
// check if number is integer
function isInt(num) {
    return num % 1 === 0;
}
console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false

//___________________

const names = "abeccbbdee";
var chars = names.split('');
let prev = null;
let k = 0;
const removeDups = (chars) => {
    chars.forEach((item) => {
        if (prev != item) {
            chars[k] = item;
            prev = item;
            k = k + 1;
        }
    })
    return chars.join('');
}




//---------**********remove duplicate value in Array*************----------------------------//

/**
 * remove duplicate value in array
 * @param {['cat', 'dog', 'lion', 'cat', 'lion', 'rat']} names 
 */
const removeDupsArrObj = (names) => {
    let obj = {};
    names.forEach(item => {
        obj[item] = true;
    });
    return Object.keys(obj);
};

// refer missingNoArr() methods to difference
const removeDupsArrEach = (arr) => {
    const newArr = [];
    arr.forEach(item => {
        if (newArr.indexOf(item) === -1) {
            newArr.push(item);
        }
    });
    return newArr;
}
//efficient both for string and number
const removeDupsArrFilter = (names) => names.filter((item, index) => names.indexOf(item) === index);
const removeDupsArrSet = (names) => [...new Set(names)];

//---------**********remove duplicate value in Array of Object*************----------------------------//

//------------------------*********count the duplicate value******************------------------------//
/**
 * count the duplicate value of array
 * @param {[1, 2, 3, 4, 2, -1, 3, 4, 3, 4, 5, -1]} arr 
 * @returns [1]
 */
const countDupsValueArr = (arr) => {
    var result = {};
    arr.forEach(item => {
        //above shortfrom
        // result[item] = (result[item] || 0) + 1;
        if (result[item]) {
            result[item] = result[item] + 1;
        } else {
            result[item] = 1;
        }
    });
    return result;
}

const countDupsValueArr1 = (arr) => {
    var result = {};
    return arr.forEach(item => {
        //above shortfrom

        result[item] = (result[item] || 0) + 1;
        console.log('result', result)
        return result;
    })
}

countDupsValueArr1()
//-------------------------********consecutive duplicates****************------------------------//
/**
 * Remove all consecutive duplicates from the string
 * @param {'aabcbbcfffdee'}  
 * @returns abcbcfde
 */
const consecutiveDupStr = (input) => {
    const arr = input.split('');
    let prev = null;
    let result = [];
    arr.forEach((item) => {
        if (item != prev) {
            result.push(item);
            prev = item;
        }
    });
    return result.join('');
}
//----------------------------********reverse the string*****------------------------------//
/**
 * reverse the string
 * @param {"Welcome to this Javascript World!"} string 
 */
const reverseString = (string) => string.split('').reverse().join('');

//------------------------******** Anagrams *****------------------------------//
/**
 * Anagrams are words that have the same characters in the same quantity
 * @param {dog} str1 
 * @param {GOD} str2 
 * @returns true
 */
const isAnagram = (str1, str2) => {
    let sort1 = str1.split('').sort().join('').toLowerCase();
    let sort2 = str2.split('').sort().join('').toLowerCase();
    return (sort1 === sort2);
}


//----------------------------********missing number*****------------------------------//

/**
 * find missing number in an array
 * @param {[1, 2, 4, 5, 7, 10]} arr 
 * @returns [3,6,8,9]
 */
const missingNoArr = (arr) => {
    const missing = [];
    const count = arr[arr.length - 1]
    for (i = 1; i <= count; i++) {
        if (arr.indexOf(i) === -1) {
            missing.push(i)
        }
    }
    return missing;
}


/**
 * check given string is palindrome or not
 * @param {'Madam'} str 
 */
const palindrome = (str) => {
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
}



/**
 * 
 * @param {[1, 2, 3, 4, 5, 9, 11, 19, 20, 21]} arr 
 * @returns [1...5,9,11,19...21]
 */
const sequenceRange = (arr) => {
    let result = [];
    let start, end;
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        start = arr[k];
        if (arr[i + 1] - arr[i] === 1) {
            end = arr[i + 1]
        } else {
            if (end) {
                result.push(start + '...' + end);
            } else {
                result.push(arr[i] + '')
            }
            k = i + 1;
            end = null;
        }
    }
    return result;
}

// move position

var arr = [1, 2, 5, 3, 4, 6]
const changePosition = (pos1, pos2) => {
    var temp = a[2];
    a[2] = a[3]
    a[3] = temp
}


const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func(...args)
        }, delay)
    }
}
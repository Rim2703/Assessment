// Easy 1 level question 1
// Given a string s consisting of words and spaces, return the length of the last word in the string.
var lengthOfLastWord = function (s) {
    let len = 0
    let x = s.trim()
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            len = 0
        }
        else {
            len++
        }
    }
    return len
};
console.log(lengthOfLastWord("   fly me   to   the moon  "))

// method 2
let s = "Hello World"
let splitStr = s.split(' ')
let lastWord = splitStr[splitStr.length - 1]
let len = lastWord.length
console.log(len)

// method 3
let str = "   fly me   to   the moon  ".trim().split(' ')
let lastWordLen = str[str.length - 1].length
console.log(lastWordLen)


// Medium 2 level question 
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
var majorityElement = function (arr) {
    if (arr.length <= 2) return arr
    let n = arr.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], 1)
        }
    }
    let count = 0
    let max = 0
    for (let pair of map) {
        if (pair[1] > count) {
            count = pair[1]
            max = pair[0]
        }
    }
    return [max]
};
console.log(majorityElement([3, 2, 3]))


// Hard 2 level question 
// Return the shortest palindrome 
function shortestPalindrome(s) {
    const reverseString = s.split('').reverse().join('');
    const length = s.length;

    for (let i = 0; i < length; i++) {
        if (s.slice(0, length - i) === reverseString.slice(i)) {
            return `${reverseString.slice(0, i)}${s}`;
        }
    }

    return '';
}
console.log(shortestPalindrome("abcd"))

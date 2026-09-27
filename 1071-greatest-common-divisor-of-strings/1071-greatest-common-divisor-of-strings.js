/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let first = str1 + str2;
    let second = str2 + str1;

    if (first !== second) return "";
    
    let a = str1.length;
    let b = str2.length;
    let higher = Math.max(a, b);
    let lower = Math.min(a, b);
    let remainder;

    while(lower > 0) {
        remainder = higher % lower;
        higher = lower;
        lower = remainder;
    }

    return str1.slice(0, higher);
};
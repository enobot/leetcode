/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xString = x.toString();
    let left = 0, right = xString.length - 1;

    while (left <= right) {
        if (xString[left] !== xString[right]) return false;
        left++;
        right--;
    }

    return true;
};
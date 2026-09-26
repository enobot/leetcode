/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let sorted = strs.sort();
    let longestWord = [];
    let first = sorted[0], last = sorted[sorted.length - 1];
    let shortest = Math.min(first.length, last.length);

    for (let i = 0; i < shortest; i++) {
        if (first[i] === last[i]) longestWord.push(first[i]);
        else break;
    }

    return longestWord.join('');
};
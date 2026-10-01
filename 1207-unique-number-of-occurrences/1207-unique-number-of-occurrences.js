/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let sorted = arr.sort();
    let ans = [];
    let count = 1;
    let curr = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        if (curr === sorted[i]) count++;
        else {
            ans.push(count);
            count = 1;
            curr = sorted[i];
        }
    }
    ans.push(count);

    for (let i = 0; i < ans.length; i++) {
        for (let j = i + 1; j < ans.length; j++) {
            if (ans[i] === ans[j]) return false;
        }
    }

    return true;

};
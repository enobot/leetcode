/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let letters = s.split('');
    let ans = [];
    let isSpace = false;
    let currIdx = 0;
    let currWord = '';

    while (currIdx < letters.length) {
        if (letters[currIdx] === ' ' && currWord === '') {
            currIdx++;
        }
        else if (letters[currIdx] === ' ' && currWord !== '') {
            ans.push(currWord);
            currWord = '';
            currIdx++;
        }
        else {
            currWord += letters[currIdx];
            currIdx++;
        }
    }

    if (currWord !== '') ans.push(currWord);
    console.log(ans)
    let left = 0, right = ans.length - 1;
    while (left < right) {
        let temp = ans[left];
        ans[left] = ans[right];
        ans[right] = temp;
        left++;
        right--;
    }
    return ans.join(' ');
};
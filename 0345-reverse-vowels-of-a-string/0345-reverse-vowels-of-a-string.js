/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let stringArr = s.split('');
    let vowels = new Set(['A', 'E', 'I', 'O', 'U'])

    let left = 0, right = s.length - 1;

    while (left < right) {
        let temp;
        let isLeftVowel = vowels.has(stringArr[left].toUpperCase());
        let isRightVowel = vowels.has(stringArr[right].toUpperCase());

        if (isLeftVowel && isRightVowel) {
            temp = stringArr[left];
            stringArr[left] = stringArr[right];
            stringArr[right] = temp;
            left++;
            right--;
        } else if (isLeftVowel && !isRightVowel) right--;
        else left++;
    }

    return stringArr.join('');
};
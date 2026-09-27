/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let stringArr = s.split('');
    let vowels = {
        'A' : 'a',
        'E' : 'e',
        'I' : 'i',
        'O' : 'o',
        'U' : 'u'
    }

    let left = 0, right = s.length - 1;

    while (left < right) {
        let temp;
        let isLeftVowel = vowels[stringArr[left].toUpperCase()] !== undefined;
        let isRightVowel = vowels[stringArr[right].toUpperCase()] !== undefined;

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
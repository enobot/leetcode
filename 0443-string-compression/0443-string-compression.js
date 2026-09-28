/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let currChar = chars[0];
    let currCharIdx = 0;
    let count = 1;

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === currChar) {
            count++;
        } else {
            chars[currCharIdx] = currChar;
            currCharIdx++;

            if (count > 1) {
                let digits = count.toString().split('');

                for (let j = 0; j < digits.length; j++) {
                    chars[currCharIdx] = digits[j];
                    currCharIdx++;
                }
            }

            currChar = chars[i];
            count = 1;
        }
    }

    // write the last group
    chars[currCharIdx] = currChar;
    currCharIdx++;

    if (count > 1) {
        let digits = count.toString().split('');

        for (let j = 0; j < digits.length; j++) {
            chars[currCharIdx] = digits[j];
            currCharIdx++;
        }
    }

    chars.length = currCharIdx;

    return currCharIdx;
};
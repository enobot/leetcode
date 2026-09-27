/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let s = '';
    let len = Math.max(word1.length, word2.length);

    for (let i = 0; i < len; i++) {
        if (word1[i] !== undefined && word2[i] !== undefined ) {
            s += word1[i];
            s += word2[i];
        } else if (word1[i] === undefined) {
            s += word2[i]
        } else {
            s += word1[i]
        }
    }

    return s;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    let max = -Infinity;

    for(let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }
    
    max = count;

    for (let i = 1; i <= s.length - k; i++) {
        if (vowels.has(s[i - 1])) {
            count--;
        }

        if (vowels.has(s[i + k - 1])) {
            count++;
        }

        max = Math.max(count, max)
    }

    return max;
};
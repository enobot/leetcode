/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    let map1 = new Map ();
    let map2 = new Map ();
    

    for (let char of word1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }

    for (let char of word2) {
        map2.set(char, (map2.get(char) || 0) + 1);
    } 

    for (let char of map1.keys()) {
        if (!map2.has(char)) return false;
    }

    
    for (let char of map2.keys()) {
        if (!map1.has(char)) return false;
    }

    let count1 = [...map1.values()];
    let count2 = [...map2.values()];

    let sort1 = count1.sort((a, b) => a - b);
    let sort2 = count2.sort((a, b) => a - b);

    for (let i = 0; i < sort1.length; i++) {
        if (sort1[i] !== sort2[i]) return false;
    }

    return true;
};

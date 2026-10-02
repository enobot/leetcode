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
    
    let counts1 = [...map1.values()].sort((a, b) => a - b);
    let counts2 = [...map2.values()].sort((a, b) => a - b);

    for (let i = 0; i < counts1.length; i++) {
        if (counts1[i] !== counts2[i]) return false;
    }


    return true;
};

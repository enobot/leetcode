/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0;
    let curr = 0;

    for (let i = 0; i < gain.length; i++) {
        curr += gain[i];
        console.log(gain[i], curr);
        highest = Math.max(curr, highest);
    }

    return highest;

};
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        let left = flowerbed[i - 1];
        let right = flowerbed[i + 1];

        if (flowerbed[i] === 0) {
            if (i === 0) {
                if (right === 0 || right === undefined) {
                    flowerbed[i] = 1;
                    n--;
                }
            } else if (i === flowerbed.length - 1) {
                if (left === 0) {
                    flowerbed[i] = 1;
                    n--;
                }
            } else {
                if (left === 0 && right === 0) {
                    flowerbed[i] = 1;
                    n--;
                }
            }
        }
    }

    return n <= 0 ? true : false;
};
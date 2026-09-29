/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeroesCount = 0;
    let start = 0;
    let max = -Infinity;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) {
            zeroesCount++;
        }

        while (zeroesCount > k) {
            if (nums[start] === 0) {
                zeroesCount--;
            }
            start++;
        }

        max = Math.max(max, end - start + 1);
    }

    return max;
};
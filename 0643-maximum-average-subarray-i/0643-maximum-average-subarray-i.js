/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;
    let maxAvg = -Infinity;

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    maxAvg = sum / k;

    for (let j = 1; j <= nums.length - k; j++) {
        sum = sum - nums[j - 1] + nums[j + k - 1];
        maxAvg = Math.max(maxAvg, sum / k);
    }

    return maxAvg;
};
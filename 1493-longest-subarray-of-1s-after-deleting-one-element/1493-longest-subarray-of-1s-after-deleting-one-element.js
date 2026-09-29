/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let longest = 0;
    let start = 0;
    let zeroesCount = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) {
            zeroesCount++;
        }

        while (zeroesCount > 1) {
            if (nums[start] === 0) {
                zeroesCount--;
            }
            start++;
        }

        longest = Math.max(longest, end - start);
    }

    return longest;
};
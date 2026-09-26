/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsSet = new Map();

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];

        if (numsSet.has(difference)) return [numsSet.get(difference), i];
        else {
            numsSet.set(nums[i], i);
        }
    }
};
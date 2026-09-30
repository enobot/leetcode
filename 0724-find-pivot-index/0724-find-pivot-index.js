/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totSum = 0;
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totSum += nums[i];
    }

    for (let j = 0; j < nums.length; j++) {
        let rightSum = totSum - nums[j] - leftSum;
        
        if (leftSum === rightSum) return j;
        leftSum += nums[j];
    }

    return -1;
};
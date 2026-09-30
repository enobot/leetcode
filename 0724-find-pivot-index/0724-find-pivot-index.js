/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totSum = 0;
    let leftSum = 0, rightSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totSum += nums[i];
    }

    rightSum = totSum - nums[0];
    if (leftSum === rightSum) return 0;

    for (let j = 1; j < nums.length; j++) {
        leftSum += nums[j - 1];
        rightSum -= nums[j];

        if (leftSum === rightSum) return j;
    }

    return -1;
};
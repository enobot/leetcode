/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let numsCount = {};
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (numsCount[nums[i]] === undefined) {
            numsCount[nums[i]] = 1;
        } else {
            numsCount[nums[i]]++;
        }
    }

    for (let num in numsCount) {
        let difference = k - num;

        if (Number(num) === difference) {
            while (numsCount[num] >= 2) {
                count++;
                numsCount[num] -= 2;
            }
        } else {
            while (numsCount[num] > 0 && numsCount[difference] > 0) {
                count++;
                numsCount[num]--;
                numsCount[difference]--;
            }
        }
    }

    return count;
};
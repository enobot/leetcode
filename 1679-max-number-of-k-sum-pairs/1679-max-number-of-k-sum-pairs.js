/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let numsCount = {};
    let count = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if (numsCount[nums[i]] === undefined) {
    //         numsCount[nums[i]] = 1;
    //     } else {
    //         numsCount[nums[i]]++;
    //     }
    // }

    // for (let num in numsCount) {
    //     let difference = k - num;

    //     if (Number(num) === difference) {
    //         let pairs = Math.floor(numsCount[num] / 2);
    //         numsCount[num] = numsCount[num] - (2 * pairs);
    //         count += pairs;
    //     } else {
    //         while (numsCount[num] > 0 && numsCount[difference] > 0) {
    //             count++;
    //             numsCount[num]--;
    //             numsCount[difference]--;
    //         }
    //     }
    // }

    for (let num of nums) {
        let diff = k - num;

        if (numsCount[diff] > 0) {
            count++;
            numsCount[diff]--;
        } else {
            if (numsCount[num] === undefined) {
                numsCount[num] = 1;
            } else {
                numsCount[num]++;
            }
        }
    }
    return count;
};
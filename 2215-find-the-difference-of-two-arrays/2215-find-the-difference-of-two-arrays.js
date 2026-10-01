/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let list1 = new Set(nums1);
    let list2 = new Set(nums2);
    let ans1 = [], ans2 = [];

    for (let num of list1) {
        if (!list2.has(num)) ans1.push(num);
    }

    for (let num of list2) {
        if (!list1.has(num)) ans2.push(num);
    }

    return [ans1, ans2];
};
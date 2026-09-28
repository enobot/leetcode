var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let next = i + 1;

            while (next < nums.length && nums[next] === 0) {
                next++;
            }

            if (next < nums.length) {
                let temp = nums[i];
                nums[i] = nums[next];
                nums[next] = temp;
            }
        }
    }
};
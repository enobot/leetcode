/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //given arr -> height
    //arr lengt -> n
    let max = -Infinity;
    let left = 0, right = height.length - 1;

    while (left < right) {
        //compare capacity
        // lowest height * (distance between right and left)
        let minHeight = Math.min(height[left], height[right]);
        let area = minHeight * (right - left);

        if (height[left] < height[right]) {
            left++;
        } else right--;

        max = Math.max(max, area);
    }

    return max;
};
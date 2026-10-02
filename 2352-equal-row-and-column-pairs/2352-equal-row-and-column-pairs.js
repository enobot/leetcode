/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
    let ans = 0;
    let outerRow = [];
    let outerCol = [];

    for (let i = 0; i < grid.length; i++) {
        outerRow.push(grid[i][0])
        outerCol.push(grid[0][i]);
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (outerRow[row] === outerCol[col]) {
                for (let i = 0; i < grid.length; i++) {
                    if (grid[row][i] === grid[i][col]) {
                        count++;
                        if (count === grid.length) {
                            ans++;
                        }
                    } 
                }
                count = 0;
            }
        }
    }
    return ans;
};
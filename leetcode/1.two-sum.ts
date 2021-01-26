/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] | never {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                const sum = nums[i] + nums[j];
                if (!dict.hasOwnProperty(sum)) {
                    dict[sum] = [i, j];
                }
            }
        }
    }
    return dict[target];
}
// @lc code=end

export default twoSum;

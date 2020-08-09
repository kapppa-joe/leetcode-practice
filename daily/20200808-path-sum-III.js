/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} node
 * @param {number[]} values
 * @param {number} sum
 * @return {number} path
 */
function countPathRecur(node, values, sum) {
    if (!node) return 0;
    
    let acc = 0;
    let result = 0;
    values.push(node.val);
    for (let i = values.length - 1; i >= 0; i--) {
        acc += values[i];
        if (acc === sum) {
            result++
        }
    }
    result += countPathRecur(node.left, values.slice(), sum);
    result += countPathRecur(node.right, values.slice(), sum);
    return result;
}


/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) { // eslint-disable-line no-unused-vars
    return countPathRecur(root, [], sum);
};
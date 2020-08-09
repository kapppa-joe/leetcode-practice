/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) { // eslint-disable-line no-unused-vars
    if (!root) return [];
    
    let m = {}
    storeVerticalOrder(root, 0, 0, m);
        
    for (let k in m) {
        for (let k2 in m[k]) {
            m[k][k2].sort((x, y) => x - y); 
        }
    }
    
    return Object.keys(m)
                 .sort((x, y) => x - y)
                 .map(key => m[key])
                 .map(obj => {
                     return Object.keys(obj)
                                  .sort((x, y) => x - y)
                                  .map(key2 => obj[key2])
                                  .flat()
                 })

};

var storeVerticalOrder = function(node, x, y, m) {
    if (!node) return;
    if (!m[x]) {
        let m2 = {};
        m2[y] = [node.val];
        m[x] = m2;
    } else if (m[x] && !m[x][y]) {
        m[x][y] = [node.val];
    } else {
        m[x][y].push(node.val);
    }

    storeVerticalOrder(node.left, x - 1, y + 1, m);
    storeVerticalOrder(node.right, x + 1, y + 1, m);
}
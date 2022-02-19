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
 const levelOrder = function(root) {
  
    if(root === null) return [];
    const result = [];
    
    const queue = [ root ];
    
    while(queue.length > 0) {
        let queueLength = queue.length;
        let sub = [];
        for(let i=0; i<queueLength; i++) {
            const current = queue.shift();
            sub.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        result.push(sub);
    }
    
    console.log(result);
    
    return result;
};
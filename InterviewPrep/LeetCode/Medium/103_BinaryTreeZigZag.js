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
 const zigzagLevelOrder = function(root) {
    
    
    if(root === null) return [];
    
    const result = [];
    const queue = [ root ];
    
    let alternate = 0;
    
    
    while(queue.length > 0) {
        
        const queueLength = queue.length;
        let subArr = [];
        
        for(let i=0; i<queueLength; i++) {
            
            const current = queue.shift();
            
            subArr.push(current.val);
            
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            
        }
        
        if(alternate % 2 === 0) {
            result.push(subArr);
        } else {
            result.push(subArr.reverse())
        }
        
        subArr = [];
        alternate ++;
        
    }
        
    return result;
    
    
};
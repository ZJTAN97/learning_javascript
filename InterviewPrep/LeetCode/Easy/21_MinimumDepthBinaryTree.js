 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
/*
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {

    if (root === null) return 0;

    let level = 1;

    const queue = [ root ];

    while(queue.length > 0) {
        
        let queueLength = queue.length;

        for(let i=0; i<queueLength; i++) {
            const current = queue.shift();

            if(current.left === null && current.right === null) return level;

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);

        }
        level += 1;

    }
    return level;
};


const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(minDepth(a));
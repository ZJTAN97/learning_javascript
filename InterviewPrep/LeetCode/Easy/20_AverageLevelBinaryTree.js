
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    
    if (root === null) return null;
    const result = [];

    const queue = [ root ];

    while(queue.length > 0) {

        let sum = 0.0;
        let queueLength = queue.length;

        console.log(queueLength);

        for(let i=0; i<queueLength; i++) {
            const current = queue.shift();
            sum += current.val;
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);

        }

        result.push(sum / queueLength);

    }

    return result;

};


const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);
const f = new TreeNode(10);


a.left = b;
a.right = c;
c.left = d;
c.right = e;
d.left = f;


averageOfLevels(a);
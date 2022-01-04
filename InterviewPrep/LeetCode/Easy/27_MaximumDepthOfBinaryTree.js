function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : val);
    this.right = (right === undefined ? null : val);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
 const maxDepth = function(root) {
    if (root === null) return 0;
    let leftSubTree = maxDepth(root.left);
    let rightSubTree = maxDepth(root.right);
    return Math.max(leftSubTree, rightSubTree) + 1;

};


const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);
const f = new TreeNode(9);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(maxDepth(a));

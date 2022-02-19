function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const isSameTree = function(p, q) {
    
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    if(p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};


const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);

const d = new TreeNode(1);
const e = new TreeNode(2);
const f = new TreeNode(3);

a.left = b;
a.right = c;

d.left = e;
d.right = f;

console.log(isSameTree(a, d));
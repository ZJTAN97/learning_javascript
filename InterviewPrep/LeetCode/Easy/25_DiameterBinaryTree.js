function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
 const diameterOfBinaryTree = function(root) {

    let diameter = 0;

    const dfs = (node) => {

        if(!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right);

    }

    dfs(root);

    console.log(diameter);

    return diameter;
    


};



const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(diameterOfBinaryTree(a));
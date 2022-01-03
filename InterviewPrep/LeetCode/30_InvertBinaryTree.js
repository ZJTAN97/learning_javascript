function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null: right)
}


const invertTree = function(root) {

    if(root === null) return root;

    // swapping of left and rights
    let leftSubTree = root.left;
    let rightSubTree = root.right;
    root.left = rightSubTree;
    root.right = leftSubTree;

    // traversing through the trees
    let right = invertTree(root.right);
    let left = invertTree(root.left);

    return root;
    
}


const invertTreeStack = function(root) {

    const stack = [ root ];
    while(stack.length) {
        const node = stack.pop();
        if(node !== null) {
            stack.push(node.left);
            stack.push(node.right);

            const temp = node.left;
            node.left = node.right;
            node.right = temp;
        }
    }
    return root;
}


a = new TreeNode(2);
b = new TreeNode(1);
c = new TreeNode(3);

a.left = b;
a.right = c;

console.log(invertTree(a));
console.log(invertTreeStack(a));
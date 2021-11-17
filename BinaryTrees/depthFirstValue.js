class Node {
    constructor(val) {
        this.val = val;
        this.left = null; // by default node no left and right child
        this.right = null;
    }
}


const depthFirstValues = (root) => {
    if (root === null) return [];
    const result = [];
    const stack = [ root ]; // push and pop
    while(stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);
        if (current.right) stack.push(current.right); 
        if (current.left) stack.push(current.left); // left child on top of stack
    }
    console.log(result);
    return result;
}


const depthFirstRecursive = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstRecursive(root.left);
    const rightValues = depthFirstRecursive(root.right);
    // console.log([root.val, ...leftValues, ...rightValues])
    return [ root.val, ...leftValues, ...rightValues ];
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


depthFirstValues(a);
const answer = depthFirstRecursive(a);
console.log(answer);
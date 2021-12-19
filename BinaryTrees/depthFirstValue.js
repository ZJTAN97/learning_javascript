// go deeper in the tree first then go across the tree.
// makes use of stack, and "visited" like BFS 
// Time Complexity: O(n), Space Complexity: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.left = null; // by default node no left and right child
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    if(root === null) return [];
    const result = [];
    const stack = [ root ];

    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right); 
    }    
    return result;
}


const depthFirstValuesRecursive = (root) => {
    if(root === null) return [];
    const leftValues = depthFirstValuesRecursive(root.left);
    const rightValues = depthFirstValuesRecursive(root.right);
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

console.log(depthFirstValues(a));
console.log(depthFirstValues(null));

console.log(depthFirstValuesRecursive(a));
console.log(depthFirstValuesRecursive(null));
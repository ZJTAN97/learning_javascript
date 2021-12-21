// Time Complexity: O(n), Space Complexity: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.left = null; // by default node no left and right child
        this.right = null;
    }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;


const treeMinValue = (root) => {

    let smallest = Infinity;
    const stack = [ root ];

    while(stack.length > 0) {

        const current = stack.pop();
        current.val < smallest ? smallest = current.val : smallest = smallest;
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
    return smallest;
}


const treeMinRecursive = (root) => {
    if(root === null) return Infinity;
    const leftMin = treeMinRecursive(root.left);
    const rightMin = treeMinRecursive(root.right);
    return Math.min(root.val, leftMin, rightMin);
}


console.log(treeMinValue(one));
console.log(treeMinRecursive(one));
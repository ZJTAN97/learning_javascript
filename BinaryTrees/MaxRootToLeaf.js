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


const maxPathSum = (root) => {
    if (root === null) return -Infinity
    if(root.left === null && root.right === null) return root.val;
    const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxChildPathSum;
}

console.log(maxPathSum(one))
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


const treeSum = (root) => {
    if(root === null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}

const treeSumBF = (root) => {
    if (root === null) return 0;

    let totalSum = 0;

    const queue = [ root ];
    while(queue.length > 0) {
        const current = queue.shift();
        totalSum += current.val;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return totalSum;
}

console.log(treeSum(one));
console.log(treeSumBF(one));
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;


// iterative approach
const reverseIterative = (head) => {
    let prev = null;
    let current = head;

    while(current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}


// recursive approach
const reverseRecursive = (head, prev=null) => {
    if(head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseRecursive(next, head);
}


console.log(reverseIterative(a));
// console.log(reverseRecursive(a));
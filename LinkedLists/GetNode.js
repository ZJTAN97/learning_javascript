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
const iterativeGet = (head, target) => {
    let count = 0;
    let current = head;
    while(current !== null) {
        if(count === target) return current.val;
        current = current.next;
        count += 1;
    }
    return null;
}


// recursive approach
const recursiveGet = (head, target) => {
    if (head === null) return null;
    if (target === 0) return head.val;
    return recursiveGet(head.next, target - 1);
}


console.log(iterativeGet(a, 4));
console.log(recursiveGet(a, 5));
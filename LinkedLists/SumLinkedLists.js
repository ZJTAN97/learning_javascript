class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;


const sumList = (head) => {
    let sum = 0;
    let current = head;
    while(current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
}


const sumListRecursive = (head) => {
    if (head === null) return 0;
    return head.val + sumListRecursive(head.next);
}

console.log(sumList(a));
console.log(sumListRecursive(a));
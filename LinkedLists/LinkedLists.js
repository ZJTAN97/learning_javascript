class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/// A --> B --> C --> D --> E --> NULL

const printLinkedList = (head) => {
    let current = head;
    while(current !== null) {
        console.log(current.val);
        current = current.next;
    }
};

const printRecursively = (head) => {
    if (head === null) return;
    console.log(head.val);
    printRecursively(head.next);
}

printLinkedList(a);
printRecursively(a)
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const linkedListsValue = (head) => {
    const values = [];
    let current = head;
    while(current !== null) {
        values.push(current.val);
        current = current.next
    }
    return values;
}

const linkedListsValueRecursive = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
}

const fillValues = (head, values) => {
    if(head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
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


console.log(linkedListsValue(a));
console.log(linkedListsValueRecursive(a));

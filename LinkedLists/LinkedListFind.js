class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// iterative approach
const iterativeFind = (head, target) => {
    let current = head;
    while(current !== null) {
        if(current === target) return true;
        current = current.next;
    }
    return false;
}



// recursive approach
const recursiveFind = (head, target) => {
    if(head === null) return false;
    if(head === target) return true;
    return recursiveFind(head.next, target);
}


let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');

a.next = b;
b.next = c;
c.next = d;


console.log(iterativeFind(a, e));
console.log(recursiveFind(a, e));
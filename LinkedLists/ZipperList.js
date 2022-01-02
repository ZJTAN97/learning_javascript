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
let f = new Node('F');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

let q = new Node('Q');
let r = new Node('R');
q.next = r;


const zipperLists = (head1, head2) => {

    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while(current1 !== null && current2 !== null) {
        if(count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count += 1;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return head1;

}


const zipperListsRecursive = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;
    
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;

    head2.next = zipperListsRecursive(next1, next2);

    return head1;
    
}


console.log(zipperLists(a, q));
console.log(zipperListsRecursive(a, q));
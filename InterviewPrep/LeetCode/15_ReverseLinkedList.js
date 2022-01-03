function Node(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const reverseList = function(head) {
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


let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;



console.log(reverseList(a));


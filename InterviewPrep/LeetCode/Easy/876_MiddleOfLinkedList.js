function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 * Fast Pointer will move two steps at a time while slow pointer move one step at a time
 * When fast pointer reach end of linkedlist, slow pointer will be at middle of linkedlist
 */
const middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.val;

}



a = new ListNode(1);
b = new ListNode(2);
c = new ListNode(3);
d = new ListNode(4);
e = new ListNode(5);
f = new ListNode(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


console.log(middleNode(a));
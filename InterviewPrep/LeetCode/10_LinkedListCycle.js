function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const hasCycle = function(head) {
    
    if(head === null) return false;

    slow = head;
    fast = head.next;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;

};


a = new ListNode(3);
b = new ListNode(2);
c = new ListNode(0);
d = new ListNode(-4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;


console.log(hasCycle(a));
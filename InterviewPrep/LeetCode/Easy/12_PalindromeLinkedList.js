function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const isPalindrome = function(head) {

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

    if(head === null || head.next === null) return true;

    let slow = head;
    let fast = head;

    while(fast.next !== null || fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = reverseList(slow.next);
    slow = slow.next;

    while(slow !== null) {
        if (head.val !== slow.val) return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
};
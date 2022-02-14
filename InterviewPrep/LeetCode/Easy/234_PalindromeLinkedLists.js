/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const isPalindrome = function(head) {
    
    let slow = head;
    let fast = head;
    
    // finding middle part
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    
    // reversing part
    let prev = null
    while(slow) {
        tmp = slow.next; 
        slow.next = prev; 
        prev = slow
        slow = tmp
    }
    
    
    let left = head; // at start
    let right = prev; // at end
    
    // checking two halves part
    while(right) {
        if(left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    return true
    
        
};


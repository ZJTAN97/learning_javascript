/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 const copyRandomList = function(head) {
    
    const cache = {};
    let curr = head;
    
    while(curr) {
        copy = new Node(curr.val);
        cache[old] = copy
    }
    
};

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.count = 0;
        this.cache = {};

        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        this.count -= 1;
    }

    insert(node) {
        const prev = this.right.prev;
        const next = this.right;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
        this.count += 1;
    }

    get(key) {
        if(key in this.cache) {
            this.remove(this.cache[key]);
            this.insert(this.cache[key]);
            return this.cache[key].val;
        }  
        return -1;
    }

    put(key, value) {
        if(key in this.cache) {
            this.remove(this.cache[key]);
        }
        this.cache[key] = new Node(key, value);
        this.insert(this.cache[key]);

        if(this.count > this.capacity) {
            const lru = this.left.next;
            delete this.cache[lru.key];
            this.remove(lru);
        }
    }
}


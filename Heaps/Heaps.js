// left child: i * 2
// right child: i * 2 + 1
// parent: Math.floor((i-1) / 2)

// Operations of Binary Heap
// 1. push  O(log(n))
// 2. peek  O(1)
// 3. poll  O(log(n))
// 4. Search: O(n)

// Binary Heap - Poll
// 1. Pop the top element
// 2. Move the last element to the top
// 3. Heapify down: Recursively compare to children, swap with bigger child


// Binary Heap - Push
// 1. Insert Element to the end
// 2. Heapify up: recursively compare it to a parent, swap if parent is smaller


/**
 * Max Heap / Priority Queue
 */

 // https://www.youtube.com/watch?v=hzxa4psfxxg

class Heap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i) {
        return i * 2;
    }

    getRightChildIndex(i) {
        return i * 2 + 1;
    }


    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }


    push(key) {
        this.data[this.data.length] = key;
        this.heapifyUp();
    }


    heapifyUp() {
        let currentIndex = this.data.length - 1;

        while(this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }

    }
}




const heap = new Heap();
heap.push(25);
heap.push(5);
heap.push(40);

console.log(heap);
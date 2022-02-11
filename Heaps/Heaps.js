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

 class MinHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    getLeftChildIndex(index){
        return 2 * index + 1;
    }

    getRightChildIndex(index){
        return 2 * index + 2;
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size;
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size;
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index){
        return this.storage[this.getLeftChildIndex(index)];
    }

    rightChild(index){
        return this.storage[this.getRightChildIndex(index)];
    }

    parent(index){
        return this.storage[this.getParentIndex(index)];
    }

    isFull(){
        return this.size == this.capacity;
    }
    
    swap(index1,index2){
        let temp = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }

    insert(data){
        this.storage[this.size] = data;
        this.size += 1;
        this.heapifyUp();
    }
    
    heapifyUp(){
         let index = this.size - 1;
         while(this.hasParent(index) && 
                 this.parent(index) > this.storage[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
         }
    }
    
}


const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);

console.log(minHeap);
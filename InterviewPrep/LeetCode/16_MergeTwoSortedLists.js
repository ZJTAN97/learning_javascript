class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(4);
a.next = b;
b.next = c;

let q = new Node(1);
let r = new Node(3);
let s = new Node(4);
q.next = r;
r.next = s;



const mergeTwoLists = function(list1, list2) {

    returnList = new Node(0);
    mergedList = returnList;

    while(list1 !== null && list2 !== null) {

        if(list1.val <= list2.val) {
            mergedList.next = list1;
            list1 = list1.next;
        } else {
            mergedList.next = list2;
            list2 = list2.next;
        }

        mergedList = mergedList.next;
    }

    if(list1 !== null) {
        mergedList.next = list1;
        list1 = list1.next;
    }

    if(list2 !== null) {
        mergedList.next = list2;
        list2 = list2.next;
    }

    return returnList.next;
}


console.log(mergeTwoLists(a, q));
// Simple Linked List

// JS Object Literal
// const n1 = {
//     data: 100
// }

// const n2 = {
//     data: 200
// }

// n1.next = n2;

// console.log(n1);

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node 
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next
            }

            current.next = node;
        }

        this.size++;
    }

    // Insert at index 
    insertAt(data, index) {
        // If index is out of range
        if(index > 0 && index > this.size + 1) {
            return;
        }

        // If first index 
        else if(index === 0) {
            this.insertFirst(data);
        }

        else if(index === this.size + 1) {
            this.insertLast(data);
        }

        else {
            const node = new Node(data);
            let current, previous;

            // Set current to first
            current = this.head;
            let count = 0;
            while(count < index) {
                previous = current;
                count++;
                current = current.next;
            }

            previous.next = node;
            node.next = current;

            this.size++;
        }

    }

    // Get at index
    getAt(index) {
        if(index > this.size) {
            return null;
        }

        let current;
        let count = 0; 
        current = this.head;
        while(count < index) {
            current = current.next;
            count++;
        }

        console.log(current.data);
    }

    // Removed at index
    removeAt(index) {
        if(index > this.size) return null;

        let current, previous;
        let count = 0;
        current = this.head;

        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                previous = current;
                current = current.next;
                count++;
            }
    
            previous.next = current.next;
        }
        

        this.size--;
    }

    // Clear list 
    clearList() {
        this.head = null;

        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Print list size
    printListSize() {
        console.log(this.size);
    }
}

const ll = new LinkedList();

ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(400);
ll.insertAt(500, 2);
ll.insertAt(600, 5);

ll.printListData();

ll.getAt(100);

ll.removeAt(5);

console.log(".....");
ll.printListData();

ll.clearList();

ll.printListData();
ll.printListSize();



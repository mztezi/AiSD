class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        const pointHead = (node) => this.head = node;

        if (this.isEmpty()) {
            pointHead(node);
        } else {
            node.next = this.head;
            pointHead(node);
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty ");
        } else {
            let curr = this.head;
            let listOfValues = "";
            while (curr) {
                listOfValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listOfValues);
        }
    }
}

const list = new LinkedList();
console.log('List is empty ', list.isEmpty());
console.log('List size ', list.getSize());
list.print();

list.prepend(10);
list.prepend(20);
list.prepend(30);

console.log('List is empty ', list.isEmpty());
console.log('List size ', list.getSize());

list.print();
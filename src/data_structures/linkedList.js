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

        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
        }
        return removedNode;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
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

list.append(10);
list.append(20);
list.append(30);

console.log('List is empty ', list.isEmpty());
console.log('List size ', list.getSize());

list.print();

list.insert('A', 2);
console.log('List size ', list.getSize());
list.print();

list.removeFrom(2);
console.log('List size ', list.getSize());
list.print();

list.removeValue(60);
console.log('List size ', list.getSize());
list.print();
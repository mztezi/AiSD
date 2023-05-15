export class CircularQueue {
    constructor(capacity) {
        this.items = [];
        this.rearIndex = -1;
        this.frontIndex = -1;
        this.currentLength = 0;
        this.capacity = capacity;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rearIndex = (this.rearIndex + 1) % this.capacity;
            this.items[this.rearIndex] = element;
            this.currentLength++;
            if (this.frontIndex === -1) {
                this.frontIndex = this.rearIndex;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const removedItem = this.items[this.frontIndex];
        this.items[this.frontIndex] = null;
        this.frontIndex = (this.frontIndex + 1) % this.capacity;
        this.currentLength--;
        if (this.isEmpty()) {
            this.rearIndex = -1;
            this.frontIndex = -1;
        }

        return removedItem;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.frontIndex];
        }
        return null;
    }

    // size() {
    //     return this.items[this.rearIndex] - this.items[this.frontIndex];
    // }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let i;
            let stringifiedQueue = '';

            for (i = this.frontIndex; i != this.rearIndex; i = (i + 1) % this.capacity) {
                stringifiedQueue += this.items[i] + " ";
            }
            stringifiedQueue += this.items[i];
            console.log(stringifiedQueue);
        }
    }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());

console.log(queue.dequeue());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(queue.peek());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();

queue.enqueue(6);
console.log(queue.peek());
queue.print();
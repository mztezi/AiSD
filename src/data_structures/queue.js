export class Queue {
    constructor() {
        this.items = {};
        this.rearIndexKey = 0;
        this.frontIndexKey = 0;
    }

    enqueue(element) {
        this.items[this.rearIndexKey] = element;
        this.rearIndexKey++;
    }

    dequeue() {
        const removedItem = this.items[this.frontIndexKey];
        delete this.items[this.frontIndexKey];
        this.frontIndexKey++;
        return removedItem;
    }

    isEmpty() {
        return this.rearIndexKey - this.frontIndexKey === 0;
    }

    peek() {
        return this.items[this.frontIndexKey];
    }

    size() {
        return this.rearIndexKey - this.frontIndexKey;
    }

    print() {
        console.log(Object.values(this.items));
    }
}
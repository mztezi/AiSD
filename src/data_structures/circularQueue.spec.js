import { CircularQueue } from "./circularQueue.js";

describe('CircularQueue', () => {
    it("should return first element in the queue: 'a'", () => {
        // assign
        const queue = new CircularQueue(5);

        // act
        queue.enqueue('a');

        // assert
        expect(queue.peek()).toEqual('a');
    });

    it("should return first element in the queue: 'a'", () => {
        // assign
        const queue = new CircularQueue(5);

        // act
        queue.enqueue('a');
        queue.enqueue(1);
        queue.enqueue(true);

        // assert
        expect(queue.peek()).toEqual('a');
    });

    it("should return first element in the queue: 1", () => {
        // assign
        const queue = new CircularQueue(5);

        // act
        queue.enqueue('a');
        queue.enqueue(1);
        queue.enqueue(true);
        queue.dequeue();

        // assert
        expect(queue.peek()).toEqual(1);
    });

    it("should return false for nonempty queue", () => {
        // assign
        const queue = new CircularQueue(5);

        // act
        queue.enqueue('a');
        queue.enqueue(1);
        queue.enqueue(true);

        // assert
        expect(queue.isEmpty()).toEqual(false);
    });

    it("should return false for queue with capacity of 5 consisting of 3 elements", () => {
        // assign
        const queue = new CircularQueue(5);

        // act
        queue.enqueue('a');
        queue.enqueue(1);
        queue.enqueue(true);

        // assert
        expect(queue.isFull()).toEqual(false);
    });

    it("should return true for queue with capacity of 5 consisting of 5 elements", () => {
        // assign
        const queue = new CircularQueue(5);

        // act
        queue.enqueue('a');
        queue.enqueue(1);
        queue.enqueue(true);
        queue.enqueue(2);
        queue.enqueue(3);

        // assert
        expect(queue.isFull()).toEqual(true);
    });
})
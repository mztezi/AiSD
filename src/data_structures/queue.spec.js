import { Queue } from "./queue.js";

describe('Queue', () => {
    it("should return first element in the queue: 'a'", () => {
        // assign
        const queue = new Queue();

        // act
        queue.enqueue('a');

        // assert
        expect(queue.peek()).toEqual('a');
    });

    it("should return first element in the queue: 'a'", () => {
        // assign
        const queue = new Queue();

        // act
        queue.enqueue('a');
        queue.enqueue(1);
        queue.enqueue(true);

        // assert
        expect(queue.peek()).toEqual(true);
    });

    it("should return first element in the queue: 1", () => {
        // assign
        const queue = new Queue();

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
        const queue = new Queue();

        // act
        queue.enqueue('a');
        queue.enqueue(1);
        queue.enqueue(true);

        // assert
        expect(queue.isEmpty()).toEqual(false);
    });

    it("should return 3 for queue consisting of 3 elements", () => {
        // assign
        const queue = new Queue();

        // act
        queue.enqueue('a');
        queue.enqueue(1);
        queue.enqueue(true);

        // assert
        expect(queue.size()).toEqual(3);
    });
})
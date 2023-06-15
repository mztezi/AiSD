import { Stack } from "./stack.js";

describe('Stack', () => {
    it("should return top element on the stack: 'a'", () => {
        // assign
        const stack = new Stack();

        // act
        stack.push('a');

        // assert
        expect(stack.peek()).toBe('a');
    });

    it("should return top element on the stack: true", () => {
        // assign
        const stack = new Stack();

        // act
        stack.push('a');
        stack.push(1);
        stack.push(true);

        // assert
        expect(stack.peek()).toBe(true);
    });

    it("should return top element on the stack: 1", () => {
        // assign
        const stack = new Stack();

        // act
        stack.push('a');
        stack.push(1);
        stack.push(true);
        stack.pop();

        // assert
        expect(stack.peek()).toBe(1);
    });

    it("should return false for nonempty stack", () => {
        // assign
        const stack = new Stack();

        // act
        stack.push('a');
        stack.push(1);
        stack.push(true);

        // assert
        expect(stack.isEmpty()).toBe(false);
    });

    it("should return 3 for stack consisting of 3 elements", () => {
        // assign
        const stack = new Stack();

        // act
        stack.push('a');
        stack.push(1);
        stack.push(true);

        // assert
        expect(stack.size()).toBe(3);
    });
})
import { climbingStaircase } from "./climbingStaircase.js"

describe('climbingStaircase', () => {
    it('should return 1 for argument 1', () => {
        // assign
        const num = 1;

        // act
        const numOfSteps = climbingStaircase(num);

        // assert
        expect(numOfSteps).toBe(1);
    });

    it('should return 5 for argument 4', () => {
        // assign
        const num = 4;

        // act
        const numOfSteps = climbingStaircase(num);

        // assert
        expect(numOfSteps).toBe(5);
    });

    it('should return 55 for argument 9', () => {
        // assign
        const num = 9;

        // act
        const numOfSteps = climbingStaircase(num);

        // assert
        expect(numOfSteps).toBe(55);
    });
})